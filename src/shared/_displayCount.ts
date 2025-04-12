import { dom, SITEVIEWS_API } from "@/shared";

export const displayCount = async () => {
  try {
    const res = await fetch(`${SITEVIEWS_API}/${dom.projectName}`, {
      method: "GET",
    });

    if (res.ok) {
      let count = (await res.json())?.data.count;

      if (count) {
        dom.outPutElement.innerHTML = count;
      } else {
        dom.outPutElement.innerHTML = "0";
      }
    }
  } catch (error) {
    console.warn(
      `Faild to load count value in '${dom.outPutElement.getAttribute(
        "id"
      )}'. refresh the page!`
    );
  }
};
