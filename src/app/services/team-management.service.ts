import { Injectable } from '@angular/core';
import { ITeam } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamManagementService {

  constructor() { }
  saveTeam(team: ITeam) {
		console.log('------------TEAM------------');
		console.log('Team Name: ' + team.teamName);
		console.log('----- Employee Detail -----');
		for (let emp of team.employees) {
			console.log('Emp Name: ' + emp);
			console.log('-------------------');
		}
	}
}
