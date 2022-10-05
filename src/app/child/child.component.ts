import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() progress!: number;
  @Output() progressChanged: EventEmitter<number> = new EventEmitter();
  
  increment(): void {
    this.progress++;
    this.progressChanged.emit(this.progress);
  }

  decrement(): void {
    this.progress--;
    this.progressChanged.emit(this.progress);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
