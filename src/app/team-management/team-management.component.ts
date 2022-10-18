import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../models/team';
import { TeamManagementService } from '../services/team-management.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private teamMngService: TeamManagementService) { }

  ngOnInit(): void {
  }

  teamForm = this.formBuilder.group({
    teamName: ['', Validators.required],
    noOfEmp: ['', Validators.required],

    teamLead: this.formBuilder.group({
      empName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      age: ['', [Validators.required, Validators.min(18)]],
      city: ['', Validators.required]
    }),

    department: this.formBuilder.group({
      deptHead: ['', Validators.required],
      deptName: ['', Validators.required]
    })
  });

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
      //this.teamMngService.saveTeam(this.teamForm.value);
      let data = JSON.stringify(this.teamForm.value);
      console.log(data);
      // let team: Team = this.teamForm.value;
      // this.teamMngService.saveTeam(team);
      console.log(this.teamForm.value);
      this.teamForm.reset();
    }
  }
}
