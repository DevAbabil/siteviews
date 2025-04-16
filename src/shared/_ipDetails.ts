// Fetches geolocation data based on the user's IP address from a public API.
// Returns only the fields with truthy values to keep the response clean.

import { GEO_IP_LOOKUP_API, log } from "@/shared";

export const ipDetails = async (): Promise<object> => {
  try {
    const res = await fetch(GEO_IP_LOOKUP_API, { method: "GET" });

    if (res.ok) {
      const data = await res.json();

      const availableData: Record<string, any> = {};

      // Only keep properties with truthy values
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          availableData[key] = value;
        }
      });

      return availableData;
    }

    return {};
  } catch (error) {
    log.warn("Failed to collect User IP Details:", error);
    return {};
  }
};
