import { Directive ,OnInit, OnDestroy, Input} from '@angular/core';
 import { LoggerService } from './logger.service';
 import { Log } from './log';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit, OnDestroy {
  @Input('appCustom')
  personName = '';
  constructor(private loggerService: LoggerService) {}
  ngOnInit() {
	  this.loggerService.createChildTwoLog(new Log('c', this.personName + ' is created.'));
  }
  ngOnDestroy() {
	  this.loggerService.createChildTwoLog(new Log('r', this.personName + ' is removed.'));
  }
}

