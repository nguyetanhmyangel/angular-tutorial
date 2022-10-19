import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { ITeam } from '../models/team';
import { ITeamFormGroup } from '../models/team-form-group';
import { TeamManagementService } from '../services/team-management.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {

  team!: ITeam;
  teamForm!: ITeamFormGroup;
  constructor(private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) {
  }

  ngOnInit(): void {
    // initialize the form
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      employees: this.formBuilder.array([
        new FormControl()
      ], [Validators.required, Validators.maxLength(5)])
    }) as ITeamFormGroup; // make sure to double-check this list with the interface
  }

  get teamName() {
		return this.teamForm.get('teamName') as FormControl;
	}

  get employees() {
    return this.teamForm.get('employees') as FormArray;
  }

  addEmployeeControl() {
    this.employees.push(new FormControl());
  }

  deleteEmployeeControl(index: number) {
    this.employees.removeAt(index);
  }

  insertEmployeeControl() {
    this.employees.insert(1, new FormControl());
  }

  setEmployeeControl() {
    this.employees.setControl(2, new FormControl('Shiv'));
  }

  setEmployeeValue() {
    this.clearEmployeeControls();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.employees.setValue(['Mahesh', 'Vishal', 'Krishn']);
  }

  patchEmployeeValue() {
    this.employees.patchValue(['Mahesh', 'Vishal', 'Krishn']);
  }

  resetEmployees() {
    this.employees.reset();
  }

  clearEmployeeControls() {
    this.employees.clear();
  }

  onFormSubmit() {
    if (this.teamForm.valid) {
      const emp = this.employees.at(0);
      console.log(emp.value);
      const rawVal = this.employees.getRawValue();
      console.log(rawVal);
      const teamToSave: ITeam = this.teamForm.value; // this is now valid typescript
      //console.log(`Saving team ${teamToSave}`);
      //console.log(this.teamForm.value);
      this.teamMngService.saveTeam(teamToSave);
      //this.teamForm.reset();
    }
  }
}
