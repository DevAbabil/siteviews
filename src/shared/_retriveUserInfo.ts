import { SITEVIEWS_API, dom, log } from "@/shared";

const fetched = async () => {
  try {
    const res = await fetch(`${SITEVIEWS_API}/${dom.projectName}?info=full`, {
      method: "GET",
    });

    if (res.ok) {
      const result = await res.json();
      return result?.data?.details;
    } else {
      throw Error();
    }
  } catch (_) {
    log.warn("Faild to retrive user info");
  }
};

export const retriveUserInfo = dom.shouldGetUserInfo
  ? fetched
  : () => {
      return null;
    };
