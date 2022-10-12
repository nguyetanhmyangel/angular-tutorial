import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnDestroy {

  constructor(private loggerService: LoggerService) {}
  ngOnInit() {
	  this.loggerService.setChildOneLog('c', 'Component created');
  }
  ngOnDestroy() {
	  this.loggerService.setChildOneLog('r', 'Component destroyed');
  }

}
