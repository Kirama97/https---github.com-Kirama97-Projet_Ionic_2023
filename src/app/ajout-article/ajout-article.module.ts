import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutArticlePageRoutingModule } from './ajout-article-routing.module';

import { AjoutArticlePage } from './ajout-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutArticlePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AjoutArticlePage]
})
export class AjoutArticlePageModule {}
