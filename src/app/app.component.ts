import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  defaultProgress:number = 2;

  progressChangedHandler(currentProgress: number): void {
    this.defaultProgress = currentProgress;
  }

}





