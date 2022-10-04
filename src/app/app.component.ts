import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  defaultProgress:number = 2;

  increment(): number {
    return this.defaultProgress++;
  }

  decrement(): number {
    return this.defaultProgress--;
  }

}





