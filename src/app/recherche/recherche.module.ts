import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { RecherchePageRoutingModule } from './recherche-routing.module';

import { RecherchePage } from './recherche.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecherchePageRoutingModule,
    RouterModule.forChild([{ path: '', component: RecherchePage }])
  
  ],
  declarations: [RecherchePage]
})
export class RecherchePageModule {}
