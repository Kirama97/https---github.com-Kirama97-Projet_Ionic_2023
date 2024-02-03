import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriePagePageRoutingModule } from './categorie-page-routing.module';

import { CategoriePagePage } from './categorie-page.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriePagePageRoutingModule,
    RouterModule.forChild([{ path: '', component: CategoriePagePage }])
  ],
  declarations: [CategoriePagePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
 


})
export class CategoriePagePageModule {}
