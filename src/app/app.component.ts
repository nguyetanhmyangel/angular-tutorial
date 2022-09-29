import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// interpolation bindings {{}}
// property binding []
// attribute binding [art.]

  title = 'Base Tutorial';
  info:string = 'Employee Information';
  id:number = 1;
  name:string = 'Moonlight';
  gender:string = 'Male';
  designation:string = 'Software Developer';
  location:string = 'Vietnam';
  salary:number = 100000;
  imgHeight:number =400;
  imgWidth:number =400;
  imgPath:string = 'assets/images/Yuna.jpg';
  columnSpan: number = 4;
  isDisabled:boolean = true;
}
