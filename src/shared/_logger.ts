import { dom } from "./_dom";

export class Logger {
  private $: typeof console;

  constructor(protected suppressLogs?: boolean) {
    this.$ = console;
  }

  info(...args: any[]) {
    if (this.suppressLogs) return;
    this.$.info("SiteViews Info :", ...args);
  }

  warn(...args: any[]) {
    if (this.suppressLogs) return;
    this.$.warn("SiteViews Warn :", ...args);
  }

  err(...args: any[]) {
    if (this.suppressLogs) return;
    this.$.error("SiteViews Errr :", ...args);
  }
}

export const log = new Logger(dom.suppressLogs);
