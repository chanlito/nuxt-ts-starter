export interface LoggerService {
  debug(message: string, ...meta: any[]): void;
  error(message: string, ...meta: any[]): void;
  log(message: string): void;
  warn(message: string, ...meta: any[]): void;
}
