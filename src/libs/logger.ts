import log from "loglevel";

/**
 * Configure le logger avec un niveau par défaut et des options supplémentaires.
 */
log.setLevel(process.env.NODE_ENV === "development" ? "debug" : "warn");

/**
 * Type pour les arguments de la fonction logger.
 */
type LogArguments = unknown[];

/**
 * Logger pour l'application front-end.
 */
const logger = {
  trace: (...args: LogArguments): void => log.trace(...args),
  debug: (...args: LogArguments): void => log.debug(...args),
  info: (...args: LogArguments): void => log.info(...args),
  warn: (...args: LogArguments): void => log.warn(...args),
  error: (...args: LogArguments): void => log.error(...args),
};

export default logger;
