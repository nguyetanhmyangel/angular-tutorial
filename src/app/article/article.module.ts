import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleComponent, ArticleListComponent, ArticleDetailComponent]
})
export class ArticleModule { }
