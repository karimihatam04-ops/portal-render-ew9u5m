/* =============================================================================
 * BCare — UI Stage Classifier (Design-only theme scope, pre-payment -> payment)
 * Sets body.bcare-redesign-active + data-bcare-stage strictly on routes up to
 * and including /credit-card-payment. Leaves all post-payment pages untouched.
 * ===========================================================================*/
(function () {
  "use strict";

  var STAGE_MAP = {
    "/": "home",
    "/book-appointment": "booking",
    "/edit-appointment": "edit-booking",
    "/processing": "processing",
    "/insurance-details": "offers",
    "/offer-summary": "summary",
    "/credit-card-payment": "payment",
  };

  function resolveStage(pathname) {
    var p = String(pathname || "/").replace(/\/+$/, "") || "/";
    if (p.indexOf("/r/") === 0) return "home";
    return STAGE_MAP[p] || null;
  }

  function decorateHeaderUserBtn() {
    var stage = document.body && document.body.getAttribute("data-bcare-stage");
    if (!stage || stage === "payment") return;
    var header = document.querySelector("#app header");
    if (!header) return;
    var btns = header.querySelectorAll('div[dir="ltr"] button');
    if (btns.length >= 2) {
      btns[btns.length - 1].classList.add("bcare-hdr-user-btn");
    }
  }

  function syncThemeScope() {
    if (!document.body) return;
    var stage = resolveStage(window.location.pathname);
    if (stage) {
      document.body.classList.add("bcare-redesign-active");
      document.body.setAttribute("data-bcare-stage", stage);
      decorateHeaderUserBtn();
    } else {
      document.body.classList.remove("bcare-redesign-active");
      document.body.removeAttribute("data-bcare-stage");
    }
  }

  var origPush = window.history.pushState;
  window.history.pushState = function () {
    var r = origPush.apply(this, arguments);
    syncThemeScope();
    setTimeout(syncThemeScope, 80);
    setTimeout(syncThemeScope, 350);
    return r;
  };

  var origReplace = window.history.replaceState;
  window.history.replaceState = function () {
    var r = origReplace.apply(this, arguments);
    syncThemeScope();
    setTimeout(syncThemeScope, 80);
    return r;
  };

  window.addEventListener("popstate", function () {
    syncThemeScope();
    setTimeout(syncThemeScope, 80);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncThemeScope, { once: true });
  } else {
    syncThemeScope();
  }

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(syncThemeScope, 60);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
