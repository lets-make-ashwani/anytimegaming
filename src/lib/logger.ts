type LogLevel = "info" | "warn" | "error" | "debug";

class Logger {
  private isDev = process.env.NODE_ENV === "development";

  private log(level: LogLevel, message: string, data?: unknown) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[AnytimeGaming] [${timestamp}] [${level.toUpperCase()}]: ${message}`;

    if (this.isDev) {
      if (data) {
        console.log(formattedMessage, data);
      } else {
        console.log(formattedMessage);
      }
    } else {
      // In production, we would stream this to an analytics/monitoring server
      // e.g. Sentry, Logtail, Axiom, etc.
      if (level === "error") {
        console.error(formattedMessage, data || "");
      }
    }
  }

  info(message: string, data?: unknown) {
    this.log("info", message, data);
  }

  warn(message: string, data?: unknown) {
    this.log("warn", message, data);
  }

  error(message: string, error?: unknown) {
    this.log("error", message, error);
  }

  debug(message: string, data?: unknown) {
    this.log("debug", message, data);
  }
}

export const logger = new Logger();
