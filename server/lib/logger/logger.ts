import 'winston-daily-rotate-file';

import * as winston from 'winston';

import { LoggerService } from './logger.service';

export class Logger implements LoggerService {
  private readonly logger: winston.LoggerInstance;

  constructor(private config: LoggerConfig) {
    this.logger = new winston.Logger({
      level: 'debug'
    });

    const useConsole = config.types.some(x => x === 'console');
    const useFiles = config.types.some(x => x === 'files');

    if (useConsole) {
      this.logger.add(winston.transports.Console, {
        colorize: true,
        prettyPrint: true,
        timestamp: true
      });
    }

    if (useFiles) {
      const dailyRotateCommonOpts = {
        datePattern: 'yyyy-MM-dd.',
        prepend: true
      };
      this.logger.add(winston.transports.DailyRotateFile, {
        filename: this.config.directory + '/debug.log',
        level: 'debug',
        name: 'debug',
        tailable: true,
        ...dailyRotateCommonOpts
      });
      this.logger.add(winston.transports.DailyRotateFile, {
        filename: this.config.directory + '/error.log',
        level: 'error',
        name: 'error',
        tailable: true,
        ...dailyRotateCommonOpts
      });
      this.logger.add(winston.transports.DailyRotateFile, {
        filename: this.config.directory + '/info.log',
        level: 'info',
        name: 'info',
        tailable: true,
        ...dailyRotateCommonOpts
      });
      this.logger.add(winston.transports.DailyRotateFile, {
        filename: this.config.directory + '/warn.log',
        level: 'warn',
        name: 'warn',
        ...dailyRotateCommonOpts
      });
    }
  }

  debug(message: string, ...meta: any[]) {
    this.logger.debug(message, ...meta);
  }

  error(message: string, ...meta: any[]) {
    this.logger.error(message, ...meta);
  }

  log(message: string) {
    this.logger.info(message);
  }

  warn(message: string, ...meta: any[]) {
    this.logger.warn(message, ...meta);
  }
}

interface LoggerConfig {
  types: Array<'console' | 'files'>;
  directory: string;
}
