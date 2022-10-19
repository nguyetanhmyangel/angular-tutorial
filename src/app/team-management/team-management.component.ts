import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators,  } from '@angular/forms';
import { ITeam } from '../models/team';
import { ITeamFormGroup } from '../models/teamfromgroup';
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
      employees: this.formBuilder.array([])
    }) as ITeamFormGroup; // make sure to double-check this list with the interface
  }

  get teamName() {
		return this.teamForm.get('teamName') as FormControl;
	}

	get employees() {
		return this.teamForm.get('employees') as FormArray;
	}

	addEmployeeControl() {
		const empGroup = this.formBuilder.group({
			empName: ['', Validators.required],
			age: ['', [Validators.required, Validators.min(18)]],
			city: ['', Validators.required]
		});
		this.employees.push(empGroup);
	}

	deleteEmployeeControl(index: number) {
		this.employees.removeAt(index);
	}

	resetEmployees() {
		this.employees.reset();
	}

	clearEmployeeControls() {
		this.employees.clear();
	}

  onFormSubmit() {
    if (this.teamForm.valid) {
      //this.teamMngService.saveTeam(team);
      // save to backend with the value of the form, which already implements the interface `ITeam`
      const teamToSave: ITeam = this.teamForm.value; // this is now valid typescript
      //console.log(`Saving team ${teamToSave}`);
      //console.log(this.teamForm.value);
      this.teamMngService.saveTeam(teamToSave);
    }
  }
}
