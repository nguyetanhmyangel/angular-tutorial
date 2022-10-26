import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, from, fromEvent, interval, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { repos } from './models/repos';
import { GitHubService } from './services/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rxjs tutorial';
  userName: string = "nguyetanhmyangel"
  repos!: repos[];

  loading: boolean = false;
  errorMessage: any;

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe({
        next: (response) => {                           //next() callback
          console.log('response received')
          this.repos = response;
        },
        error: (error) =>  {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        complete: () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        }
    })
  }


}


