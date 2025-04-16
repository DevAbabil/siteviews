/**
 *  SiteViews DOM Interface
 *
 * This module provides utility accessors for reading and validating
 * required configuration from the custom <script> tag used for SiteViews.
 *
 * It ensures:
 * - The script tag is correctly configured with the required attributes
 * - Safe and readable access to project settings
 * - Proper error handling and helpful warnings
 *
 * Attributes supported in the <script scriptfor="siteviews"> tag:
 * - project-name           = The name of the project
 * - output-element-id      = The ID of the DOM element where views will be displayed
 * - refresh                = Refresh interval (in seconds, minimum 10)
 * - user-info              = If present, enables user info collection
 * - toast                  = If present, enables toast notifications
 *
 * Documentation: ${DOC_SOURCE}
 */

import { DOC_SOURCE, log } from "@/shared";
import slugify from "slugify";

export const dom = {
  scriptSrc: document.querySelector("script[scriptfor='siteviews']"),

  get siteViewsScript(): Element {
    if (!this.scriptSrc)
      throw Error(
        `Please add the "scriptfor" attribute with the value "siteviews" to your script tag. Without it, the SiteViews counter feature won't work. Read the documentation: ${DOC_SOURCE}`
      );
    return this.scriptSrc;
  },

  get projectName(): string {
    let project_name = this.siteViewsScript.getAttribute("project-name");

    if (!project_name) {
      log.warn(
        `Please provide a project name using the attribute 'project-name="your-project-name"' in the siteviews script tag. This warning will disappear once the project name is set. Read the documentation: ${DOC_SOURCE}`
      );
      project_name = "siteviews";
    }
    return slugify(project_name);
  },

  get outPutElement(): Element {
    let output_element_id =
      this.siteViewsScript.getAttribute("output-element-id");

    if (!output_element_id)
      throw Error(
        `Please provide a valid 'output-element-id' that matches an existing HTML element. Recheck your siteviews script tag.`
      );

    let outputElement = document.getElementById(output_element_id);

    if (!outputElement)
      throw Error(
        `The provided output-element-id: "${output_element_id}" was not found in the HTML. Make sure the ID is correctly used in your markup.`
      );

    return outputElement;
  },

  get suppressLogs(): boolean {
    return this.siteViewsScript.hasAttribute("suppressLogs");
  },

  get refreshTime(): number | null {
    let inputRefresh: unknown = this.siteViewsScript.getAttribute("refresh");

    if (inputRefresh && isNaN(inputRefresh as number)) {
      inputRefresh = 10;
      throw Error(
        `The 'refresh' attribute value must be an integer. Please recheck your siteviews script tag.`
      );
    }

    if (inputRefresh && (inputRefresh as number) < 10) {
      inputRefresh = 10;
      log.warn(
        `You've set a refresh value less than 10, which is not allowed. The minimum acceptable refresh value is 10.`
      );
    }

    return (inputRefresh as number) * 1000;
  },

  get shouldGetUserInfo(): boolean {
    let userInfoAttr = this.siteViewsScript.hasAttribute("user-info");
    return !!userInfoAttr;
  },

  get shouldShowToast(): boolean {
    let toastAttr = this.siteViewsScript.hasAttribute("toast");
    return !!toastAttr;
  },
};

/*
  These getters trigger early to ensure everything is loaded and valid.
  You can remove them if you prefer lazy evaluation.

  - dom.siteViewsScript  → validates script tag
  - dom.projectName      → gets or warns about project name
  - dom.outPutElement    → validates and returns the DOM element
  - dom.refreshTime      → checks and returns refresh time in ms
*/

{
  dom.siteViewsScript;
  dom.projectName;
  dom.outPutElement;
  dom.refreshTime;
}
