import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { repos } from '../models/repos';

@Injectable()
export class GitHubService {

  baseURL: string = "https://api.github.com/";

  constructor(private http: HttpClient) {
  }

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }

}
