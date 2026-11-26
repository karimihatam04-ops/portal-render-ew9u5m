/* =============================================================================
 * BCare — Month Names → Numbers (injected script)
 * -----------------------------------------------------------------------------
 * Shows numeric months only (1–12) across all date pickers:
 *   - Gregorian month names (يناير…ديسمبر) → their number
 *   - Hijri month labels like "3 - ربيع الأول" → "3"
 *   - MobileDatePicker calendar header, trigger display, dropdown lists
 * ===========================================================================*/
(function () {
  "use strict";

  // Gregorian Arabic month names → number
  var GREG = {
    "يناير": "1",
    "فبراير": "2",
    "مارس": "3",
    "أبريل": "4",
    "مايو": "5",
    "يونيو": "6",
    "يوليو": "7",
    "أغسطس": "8",
    "سبتمبر": "9",
    "أكتوبر": "10",
    "نوفمبر": "11",
    "ديسمبر": "12"
  };

  var GREG_KEYS = Object.keys(GREG);
  var GREG_RE   = new RegExp(GREG_KEYS.join("|"), "g");

  // "digit(s) - any Arabic words" → keep only the number  e.g. "3 - ربيع الأول" → "3"
  var HIJRI_LABEL_RE = /^(\d{1,2})\s*-\s*[؀-ۿ\s]+$/u;

  function patchText(node) {
    if (node.nodeType !== Node.TEXT_NODE) return;
    var orig = node.nodeValue;

    // 1. Strip Hijri "N - name" labels (whole-string match so we don't mangle other text)
    var trimmed = orig.trim();
    if (HIJRI_LABEL_RE.test(trimmed)) {
      node.nodeValue = orig.replace(trimmed, trimmed.replace(HIJRI_LABEL_RE, "$1"));
      orig = node.nodeValue;
      trimmed = orig.trim();
    }

    // 2. Replace Gregorian month names — but ONLY when the text node is purely a month
    //    name (standalone dropdown item).  Skip formatted dates like "3 أكتوبر 2026"
    //    so the date-picker display stays intact.
    var isMonthOnly = GREG_KEYS.indexOf(trimmed) !== -1;
    var inOption = false;
    var el = node.parentElement;
    while (el) {
      var tag = el.tagName;
      if (tag === "OPTION" || tag === "SELECT") { inOption = true; break; }
      // stop searching once we hit a known container boundary
      if (tag === "INPUT" || tag === "BODY") break;
      el = el.parentElement;
    }
    if (!isMonthOnly && !inOption) return;

    var updated = orig.replace(GREG_RE, function (m) { return GREG[m] || m; });
    if (updated !== orig) node.nodeValue = updated;
  }

  function patchSubtree(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var node = walker.nextNode();
    while (node) {
      patchText(node);
      node = walker.nextNode();
    }
  }

  function patchAll() {
    patchSubtree(document.getElementById("app") || document.body);
  }

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(patchAll, 80);
  }).observe(document.documentElement, { childList: true, subtree: true });

  setTimeout(patchAll, 400);
  setTimeout(patchAll, 900);
  setTimeout(patchAll, 1800);
})();
