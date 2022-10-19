import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITeam } from '../models/team';
import { ITeamFormGroup } from '../models/teamFromGroup';
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
      noOfEmp: [0, Validators.required],
      teamLead: this.formBuilder.group({
        empName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
        age: [0, [Validators.required, Validators.min(18)]],
        city: ['', Validators.required]
      }),

      department: this.formBuilder.group({
        deptHead: ['', Validators.required],
        deptName: ['', Validators.required]
      })
    }) as ITeamFormGroup; // make sure to double-check this list with the interface
  }

  get teamName() {
    return this.teamForm.get('teamName') as FormControl;
  }
  get noOfEmp() {
    return this.teamForm.get('noOfEmp') as FormControl;
  }
  get teamLead() {
    return this.teamForm.get('teamLead') as FormGroup;
  }
  get department() {
    return this.teamForm.get('department') as FormGroup;
  }
  onFormSubmit() {
    if (this.teamForm.valid) {
      //this.teamMngService.saveTeam(team);
      // save to backend with the value of the form, which already implements the interface `ITeam`
      const teamToSave: ITeam = this.teamForm.value; // this is now valid typescript
      console.log(`Saving team ${teamToSave}`);
      console.log(this.teamForm.value);
      this.teamMngService.saveTeam(teamToSave);
      console.log(this.teamForm.value);
      this.teamForm.reset();
    }
  }
}
