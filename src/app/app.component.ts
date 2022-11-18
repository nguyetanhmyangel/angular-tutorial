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
  title = 'http tutorial';
  userName = 'nguyetanhmyangel'
  pageNo = '1';
  sortOn = 'description';
  repos!: repos[];
  loading = false;
  errorMessage = '';

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName, this.pageNo, this.sortOn)
      .subscribe({
        next: (response) => {                           //next() callback
          console.log('response received')
          this.repos = response;
        },
        error: (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error.message;
          this.loading = false;
        },
        complete: () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        }
      })
  }


}


