import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Welcome!</h1>
              <p>This is Home Component </p>
             `
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
