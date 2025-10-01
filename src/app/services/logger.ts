import { Injectable, isDevMode} from '@angular/core';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
const priority: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
}


@Injectable({
  providedIn: 'root'
})
export class Logger {

  private readonly enable: boolean = isDevMode();

  private level: LogLevel = this.enable ? 'debug' : 'info';

  private log(type: LogLevel, msg: string, otro?: unknown) {

    if(!this.enable) return;

    if (priority[type] >= priority[this.level]) return;

    const time: string = new Date().toISOString();
    const line = `${time} [${type}] ${msg}`;

    switch (type) {
      case 'debug': console.debug(line, otro ?? ''); break;
      case 'info': console.info(line, otro ?? ''); break;
      case 'warn': console.warn(line, otro ?? ''); break;
      case 'error': console.error(line, otro ?? ''); break;

    }
  }
}
