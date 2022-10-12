import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private allChildTwoLogs: Log[] = [];
  private childOneLog = new Log('', '');

  createChildTwoLog(log: Log) {
    this.allChildTwoLogs.push(log);
  }
  getAllChildTwoLogs() {
    return this.allChildTwoLogs;
  }
  setChildOneLog(logType: string, message: string) {
    this.childOneLog.logType = logType;
    this.childOneLog.message = message;
  }
  getChildOneLog() {
    return this.childOneLog;
  }
}
