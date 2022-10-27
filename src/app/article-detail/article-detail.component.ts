
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap, filter, tap } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$!: Observable<Article>;
  constructor(private _route: ActivatedRoute, private _articleService: ArticleService) {}

  ngOnInit(): void {
    // console.log(this._route.snapshot.paramMap);
    // console.log(this._route.snapshot.params);
    // this._route.paramMap.subscribe(console.log);
    // this._route.params.subscribe(console.log);

    // get the article method one
    // this.article$ = this._route.params.pipe(
    //   pluck('slug'),
    //   switchMap(slug => this._articleService.getArticleBySlug(slug)),
    //   tap(val => {
    //     console.log("!val is: " + !val);
    //     console.log("!!val is: " + !!val);
    //   }),
    //   filter((article) => !!article)
    // );

    // get the article method two
    let slug = this._route.snapshot.paramMap.get('slug')!;
    this.article$ = this._articleService.getArticleBySlug(slug);
  }

}
