import { Component } from '@angular/core';
import { Person } from './models/person';
import { ApiService } from './services/api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http post';
  people!: Person[];
  person = new Person();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
      })

  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })
  }
}


