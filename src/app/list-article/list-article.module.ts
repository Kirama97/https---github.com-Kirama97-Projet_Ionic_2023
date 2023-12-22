import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListArticlePageRoutingModule } from './list-article-routing.module';

import { ListArticlePage } from './list-article.page';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListArticlePageRoutingModule,
    RouterModule.forChild([{ path: '', component: ListArticlePage }])
  ],
  declarations: [ListArticlePage],
  exports: [ListArticlePage],
})
export class ListArticlePageModule {}
