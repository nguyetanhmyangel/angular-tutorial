
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap, filter, tap, map } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$!: Observable<Article>;
  //slug ='';
  constructor(private _route: ActivatedRoute, private _articleService: ArticleService) {}

  ngOnInit(): void {
    // console.log(this._route.snapshot.paramMap);
    // console.log(this._route.snapshot.params);
    // this._route.paramMap.subscribe(console.log);
    // this._route.params.subscribe(console.log);

    // this.article$ = this._route.paramMap.pipe(
    //   map((params) => {
    //     this.slug = params.get('slug')!;
    //     console.log('slug', this.slug);
    //   }),
    //   tap(() => {
    //     console.log("!val is: " + this.slug);
    //   }),
    //   switchMap(() => this._articleService.getArticleBySlug(this.slug))
    // );

    this.article$ = this._route.paramMap.pipe(
      map((params) => params.get('slug')),
      switchMap((slug) => this._articleService.getArticleBySlug(slug!))
    );

    // get the article method two
    // let slug = this._route.snapshot.paramMap.get('slug');
    // this.article$ = this._articleService.getArticleBySlug(slug!);
  }

}
