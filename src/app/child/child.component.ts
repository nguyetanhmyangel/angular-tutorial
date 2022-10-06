import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  progress: number = 2;


  incrementByOne(): void {
    this.progress++;
  }

  decrementByOne(): void {
    this.progress--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
