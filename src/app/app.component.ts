import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "tutorial";
  firstName: string = "Angular";
  lastName: string = "tutorial";
  fullName: string = "";
  getFullName(): string {
    return this.fullName = this.firstName + ' ' + this.lastName;
  }
  @Input() count: number = 0;
  @Output() countChanged = new EventEmitter<number>();
  handleIncrement(): void {
    this.count++;
    this.countChanged.emit(this.count);
  }

}
