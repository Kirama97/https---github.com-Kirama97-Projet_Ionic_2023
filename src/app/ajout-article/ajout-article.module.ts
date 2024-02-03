import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutArticlePageRoutingModule } from './ajout-article-routing.module';

import { AjoutArticlePage } from './ajout-article.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutArticlePageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AjoutArticlePage }])
  ],
  declarations: [AjoutArticlePage]
})
export class AjoutArticlePageModule {}
