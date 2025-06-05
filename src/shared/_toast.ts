/**
 * toast.ts
 *
 * Utility module for dynamically injecting Toastify.js for toast notifications.
 *
 * This module handles:
 * - Injecting Toastify CSS and JS dynamically into the page.
 * - Displaying a styled toast message using Toastify.
 * - Cleaning up the Toastify scripts and styles after the toast is shown.
 *
 * Requirements:
 * - The consumer must include the `toast` attribute in the <script> tag.
 * - The DOM must satisfy the `shouldShowToast` condition for execution.
 *
 * Usage:
 * toast.loadScriptSource();         // Injects Toastify CSS & JS
 * toast.show("Hello World"); // Shows toast message
 * toast.removeScriptScource();      // Removes Toastify CSS & JS
 */

import { TOAST_DURATION, dom } from "@/shared";

export const toast = {
  /**
   * Dynamically injects Toastify CSS and JS into the document.
   * Only runs if `dom.shouldShowToast` is true.
   */
  loadScriptSource(): void {
    if (dom.shouldShowToast) {
      let css = document.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("type", "text/css");
      css.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
      );
      css.setAttribute("siteviews-toast", "css");

      let js = document.createElement("script");
      js.setAttribute("type", "text/javascript");
      js.setAttribute("src", "https://cdn.jsdelivr.net/npm/toastify-js");
      js.setAttribute("siteviews-toast", "js");

      const body = document.querySelector("body"),
        head = document.querySelector("head");

      if (head && body) {
        head.appendChild(css);
        body?.parentElement?.appendChild(js);
      }
    }
  },

  /**
   * Removes previously injected Toastify CSS and JS after a short delay.
   * Default delay is TOAST_DURATION + 1s buffer.
   */
  removeScriptScource() {
    const timer = setTimeout(() => {
      document.querySelector("link[siteviews-toast='css']")?.remove();
      document.querySelector("script[siteviews-toast='js']")?.remove();
      clearTimeout(timer);
    }, TOAST_DURATION + 5000);
  },

  /**
   * Displays a toast notification with the given message.
   * Waits until the window `onload` event to ensure Toastify is available.
   * Automatically calls `removeScriptScource` to clean up.
   */
  show(message: string) {
    (window as any)
      .Toastify({
        text: message,
        duration: TOAST_DURATION,
        destination: "/",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
          background:
            "linear-gradient(276deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 47%, rgba(0,212,255,1) 100%)",
          color: "white",
        },
      })
      .showToast();

    this.removeScriptScource();
  },
};
