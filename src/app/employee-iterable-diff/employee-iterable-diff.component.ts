import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-iterable-diff',
  templateUrl: './employee-iterable-diff.component.html',
  styleUrls: ['./employee-iterable-diff.component.css']
})
export class EmployeeIterableDiffComponent implements OnInit {

  @Input() empArray!: Employee[];

  itrChangeLogs: string[] = [];
  empItrDiffer: any;
  empItrDifferMap = new Map<number, any>();
  empItrMap = new Map<number, Employee>();

  constructor(private itrDiffers: IterableDiffers) {
  }
  ngOnInit() {
    this.empItrDiffer = this.itrDiffers.find([]).create();
    // this.empArray.forEach(emp => {

    //    this.empItrDifferMap.set(emp.id, this.itrDiffers.find(emp).create());
    //    this.empItrMap.set(emp.id, emp);
    // })
  }
  ngDoCheck() {
    const empArrayChanges = this.empItrDiffer.diff(this.empArray);

    if (empArrayChanges) {
      empArrayChanges.forEachAddedItem((record: { item: any; }) => {
        let emp = record.item;
        console.log('Added ' + emp.name);
        // this.empItrDifferMap.set(emp.id, this.itrDiffers.find(emp).create());
        // this.empItrMap.set(emp.id, emp);
        this.itrChangeLogs.push('Added ' + emp.name);

      });

      empArrayChanges.forEachRemovedItem((record: { item: any; }) => {
        let emp = record.item;
        console.log('Removed ' + emp.name);
        // this.empItrDifferMap.delete(emp.id);
        // this.empItrMap.delete(emp.id);
        this.itrChangeLogs.push('Removed ' + emp.name);
      });

      //Detect changes in object inside array
      // for (let [key, empItrDiffer] of this.empItrDifferMap) {
      //   const empChanges = empItrDiffer.diff(this.empItrMap.get(key));
      //   if (empChanges) {
      //     empChanges.forEachChangedItem((record: { previousValue: string; currentValue: string; }) => {
      //       this.itrChangeLogs.push('---Update (id=' + key + ')---');
      //       this.itrChangeLogs.push('Previous value: ' + record.previousValue);
      //       this.itrChangeLogs.push('Current value: ' + record.currentValue);
      //       this.itrChangeLogs.push('-------------------------');
      //     });
      //   }
      // }
    }
  }

}
