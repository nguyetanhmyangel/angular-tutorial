import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="";
  clickCount: number = 0;
  clickMe(): void {
    this.clickCount++;
  }
  inputValue: string = '';
  handleInput(event: any): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
