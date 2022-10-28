import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Home page</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
