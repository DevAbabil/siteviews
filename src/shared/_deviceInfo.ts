export const deviceInfo = {
  userDateTime: new Date().toLocaleString(),
  platform: navigator?.platform,
  deviceMemmory: (navigator as any)?.deviceMemory,
  browserCodeName: navigator?.appCodeName,
  browserLanguage: navigator?.language,
  browserOnline: navigator?.onLine,
  browserEngine: navigator?.product,
  version: navigator?.appVersion,
  screenWidth: screen?.width,
  screenHeight: screen?.height,
};
