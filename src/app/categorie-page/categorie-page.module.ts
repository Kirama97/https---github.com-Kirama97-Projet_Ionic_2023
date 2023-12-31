import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriePagePageRoutingModule } from './categorie-page-routing.module';

import { CategoriePagePage } from './categorie-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriePagePageRoutingModule
  ],
  declarations: [CategoriePagePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
 


})
export class CategoriePagePageModule {}
