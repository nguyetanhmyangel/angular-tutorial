import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  size: string = '20';
  styleClass: StyleClass = new StyleClass();
  cssStringVar: string= 'red size20';
  cssArray:string[]=['red','size20']; 
}

class StyleClass {
  'color': string= 'red';
  'font-size.px': number= 20
  'font-weight': string= 'bold';
}

class CssClass {
  red: boolean= true;
  size20: boolean= true;
}
