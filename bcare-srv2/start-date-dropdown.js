/* =============================================================================
 * BCare — Insurance Start Date Dropdown (injected script)
 * -----------------------------------------------------------------------------
 * Replaces the MobileDatePicker calendar for "تاريخ بدء التأمين" with three
 * native <select> dropdowns (day / month / year) spanning today → +3 years.
 * Updates Vue's reactive form.startDate so the value is submitted correctly.
 * ===========================================================================*/
(function () {
  "use strict";

  var PATCHED = "data-start-date-sel";
  var STYLE_ID = "bcare-sdd-style";

  if (!document.getElementById(STYLE_ID)) {
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent =
      ".sdd-wrap{display:flex;gap:8px;direction:rtl;width:100%}" +
      ".sdd-select{flex:1;padding:11px 10px;font-size:14px;border:1.5px solid #d0d5dd;" +
      "  border-radius:8px;background:#fff;color:#333;font-family:inherit;" +
      "  appearance:none;-webkit-appearance:none;text-align:right;cursor:pointer;" +
      "  outline:none;transition:border-color .15s}" +
      ".sdd-select:focus{border-color:#1a3c5e}" +
      ".sdd-select.sdd-year{flex:1.4}" +
      ".sdd-select:invalid,.sdd-select option[value='']{color:#999}";
    document.head.appendChild(st);
  }

  /* ── helpers ─────────────────────────────────────────────────────────────── */
  function pad(n) { return String(n).padStart(2, "0"); }

  function setVueStartDate(anchorEl, isoDate) {
    /* Walk up the DOM then the Vue component tree looking for form.startDate */
    var el = anchorEl;
    while (el) {
      if (el.__vueParentComponent !== undefined) {
        var comp = el.__vueParentComponent;
        while (comp) {
          try {
            var ss = comp.setupState;
            if (ss && ss.form && ("startDate" in ss.form)) {
              ss.form.startDate = isoDate;
              return true;
            }
          } catch (e) {}
          comp = comp.parent;
        }
        break;
      }
      el = el.parentElement;
    }
    return false;
  }

  function buildSelects(trigger, today) {
    var wrap = document.createElement("div");
    wrap.className = "sdd-wrap";

    /* ── Day ── */
    var dayEl = document.createElement("select");
    dayEl.className = "sdd-select sdd-day";
    var optD0 = document.createElement("option");
    optD0.value = ""; optD0.textContent = "يوم"; /* يوم */
    dayEl.appendChild(optD0);
    for (var d = 1; d <= 31; d++) {
      var od = document.createElement("option");
      od.value = pad(d); od.textContent = String(d);
      dayEl.appendChild(od);
    }

    /* ── Month (numbers 1-12) ── */
    var monEl = document.createElement("select");
    monEl.className = "sdd-select sdd-month";
    var optM0 = document.createElement("option");
    optM0.value = ""; optM0.textContent = "شهر"; /* شهر */
    monEl.appendChild(optM0);
    for (var mo = 1; mo <= 12; mo++) {
      var om = document.createElement("option");
      om.value = pad(mo); om.textContent = String(mo);
      monEl.appendChild(om);
    }

    /* ── Year (current + next 2 = 3 years) ── */
    var curYear = today.getFullYear();
    var yrEl = document.createElement("select");
    yrEl.className = "sdd-select sdd-year";
    var optY0 = document.createElement("option");
    optY0.value = ""; optY0.textContent = "سنة"; /* سنة */
    yrEl.appendChild(optY0);
    for (var y = curYear; y <= curYear + 2; y++) {
      var oy = document.createElement("option");
      oy.value = String(y); oy.textContent = String(y);
      yrEl.appendChild(oy);
    }

    /* ── Pre-fill with the current form value ── */
    var initVal = trigger.querySelector(".trigger-text");
    if (!initVal) {
      /* try reading from Vue component */
      var el = trigger;
      while (el) {
        if (el.__vueParentComponent !== undefined) {
          var comp = el.__vueParentComponent;
          while (comp) {
            try {
              var ss = comp.setupState;
              if (ss && ss.form && ss.form.startDate) {
                var parts = ss.form.startDate.split("-");
                if (parts.length === 3) {
                  yrEl.value  = parts[0];
                  monEl.value = parts[1];
                  dayEl.value = parts[2];
                }
                break;
              }
            } catch (e) {}
            comp = comp.parent;
          }
          break;
        }
        el = el.parentElement;
      }
    } else {
      /* trigger text is "D MonthName YYYY" — parse year at minimum */
      var txt = initVal.textContent.trim().split(/\s+/);
      if (txt.length >= 1 && /^\d{4}$/.test(txt[txt.length - 1])) {
        yrEl.value = txt[txt.length - 1];
      }
    }

    /* default to today if nothing pre-filled */
    if (!yrEl.value)  yrEl.value  = String(curYear);
    if (!monEl.value) monEl.value = pad(today.getMonth() + 1);
    if (!dayEl.value) dayEl.value = pad(today.getDate());

    function onChange() {
      var y = yrEl.value, m = monEl.value, d2 = dayEl.value;
      if (!y || !m || !d2) return;
      var iso = y + "-" + m + "-" + d2;
      setVueStartDate(wrap, iso);
    }

    dayEl.addEventListener("change", onChange);
    monEl.addEventListener("change", onChange);
    yrEl.addEventListener("change",  onChange);

    /* fire once to sync the pre-filled value */
    setTimeout(onChange, 0);

    /* RTL order: day | month | year */
    wrap.appendChild(dayEl);
    wrap.appendChild(monEl);
    wrap.appendChild(yrEl);
    return wrap;
  }

  /* ── find and patch the start-date picker ───────────────────────────────── */
  function patch() {
    /* Find all labels containing "تاريخ بدء التأمين" */
    var walker = document.createTreeWalker(
      document.getElementById("app") || document.body,
      NodeFilter.SHOW_TEXT, null, false
    );
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.indexOf("تاريخ بدء التأمين") === -1) continue;
      /* found the label — look for the picker-trigger in the same parent block */
      var container = node.parentElement;
      for (var i = 0; i < 5 && container; i++) {
        var trigger = container.querySelector(".picker-trigger");
        if (trigger) break;
        container = container.parentElement;
      }
      if (!trigger) continue;
      if (trigger.hasAttribute(PATCHED)) continue;
      trigger.setAttribute(PATCHED, "1");

      /* hide the original trigger */
      trigger.style.display = "none";

      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var selects = buildSelects(trigger, today);

      trigger.parentElement.insertBefore(selects, trigger);
      break;
    }
  }

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(patch, 120);
  }).observe(document.documentElement, { childList: true, subtree: true });

  setTimeout(patch, 500);
  setTimeout(patch, 1000);
  setTimeout(patch, 2000);
})();
