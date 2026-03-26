/**
 * Root entry point for the SiteViews script.
 *
 * - Warns if used in local development.
 * - Dynamically injects and displays toast notifications.
 * - Collects device and IP information.
 * - Sends visit data to the SiteViews API.
 * - Shows and updates view count at a user-defined interval.
 * - Stores user information globally in `window.siteViewsFullData` when `user-info` attribute is present in the script tag.
 */

import {
  dom,
  isLocal,
  isVisited,
  toast,
  deviceInfo,
  ipDetails,
  SITEVIEWS_API,
  displayCount,
  log,
} from "@/shared";

if (isLocal) {
  log.warn("To use 'SiteViews', Please Deploy your website at first.");
  log.warn("SiteViews Does not work in in Local Development");
}

// Load toastify-js package dynamically
toast.loadScriptSource();

const requestInit = async () => {
  try {
    const combineInfo = {
      project: dom.projectName,
      hostname: location.hostname,
      ...(await ipDetails()),
      ...deviceInfo,
    };

    const res = await fetch(SITEVIEWS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: combineInfo }),
    });

    if (res.status === 200) {
      toast.show(`Welcome to ${dom.projectName}`);
    } else {
      log.warn((await res.json())?.message);
    }
  } catch (_) {
    log.warn("failed to enteract with stieviews api");
  }
};

if (!isVisited && !isLocal) {
  requestInit();
}

displayCount();

if (dom.refreshTime && !isLocal) {
  const timer = setInterval(() => {
    displayCount();
  }, dom.refreshTime);

  if (!dom.outPutElement) {
    clearInterval(timer);
  }
}
