
import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title: string = "tutorial";
  empArray:any[] = [];
  index = 103;
  ngOnInit() {
    this.empArray.push(new Employee(100, "Mashes"));
    this.empArray.push(new Employee(101, "Krishna"));
    this.empArray.push(new Employee(102, "Shiva"));
  }
  add() {
    this.empArray.push(new Employee(this.index, "Name"+ this.index++));
    console.log('Employee added: ' + JSON.stringify(this.empArray));
  }
  remove(index: number) {
    console.log(index);
    this.empArray.splice(index, 1);
  }
  update(index: number) {
    this.empArray[index].name += "-U";
  }
}





