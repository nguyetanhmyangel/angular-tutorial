
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtTitle: string = "tutorial";
  size = '25px';
  colors = ['CYAN', 'GREEN', 'RED'];
  myColor = '';
  titleColor = 'green'

  showCustomIf = false;
  showCustomDelay = false;
  delayInSec = 0;

  changeCondition(flag: boolean) {
    this.showCustomIf = flag;
  }
}





