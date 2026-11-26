/* =============================================================================
 * BCare — Captcha Inline Layout (injected script)
 * -----------------------------------------------------------------------------
 * Places the CAPTCHA input field on the same horizontal row as the CAPTCHA
 * image, instead of stacking it below. Works across all insurance tabs
 * (vehicle, medical, travel, domestic, medical_errors).
 * ===========================================================================*/
(function () {
  "use strict";

  var PATCHED_ATTR = "data-captcha-inline";

  function patchCaptchaLayout() {
    // Target all CAPTCHA input fields by their placeholder text
    var inputs = document.querySelectorAll('input[placeholder="أدخل الأرقام"]');

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var parent = input.parentElement;

      // Skip already-patched containers
      if (!parent || parent.hasAttribute(PATCHED_ATTR)) continue;

      // Confirm this is the CAPTCHA container (must contain a canvas)
      if (!parent.querySelector("canvas")) continue;

      // Switch from vertical stack to horizontal row
      parent.classList.remove("flex-col");
      parent.classList.add("flex-row", "items-center");

      // Let the input fill the remaining space beside the CAPTCHA image
      input.classList.remove("w-full");
      input.style.flex = "1";
      input.style.minWidth = "0";

      parent.setAttribute(PATCHED_ATTR, "1");
    }
  }

  // Re-run on DOM changes to handle SPA tab switches and route changes
  var observer = new MutationObserver(function () {
    patchCaptchaLayout();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  // Initial runs to catch the first render
  setTimeout(patchCaptchaLayout, 300);
  setTimeout(patchCaptchaLayout, 800);
  setTimeout(patchCaptchaLayout, 1500);
})();
