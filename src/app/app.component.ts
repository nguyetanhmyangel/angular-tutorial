
import { Component,OnInit } from '@angular/core';
import { Log } from './log';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  txtTitle: string = "tutorial";
  childOneLog = {} as Log;
   constructor(private loggerService: LoggerService) {}
   showChildOne = true;
   showCounter = true;
   ngOnInit() {
	   this.childOneLog = this.loggerService.getChildOneLog();
   }
   onToggleCP1() {
	   this.showChildOne = (this.showChildOne === true)? false : true;
   }
   onToggleCounter() {
	   this.showCounter = (this.showCounter === true)? false : true;
   }
}





