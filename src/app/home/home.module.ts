import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DetailsPage } from '../details/details.page';
import { DetailsPageModule } from '../details/details.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
   
  
  ],
  declarations: [HomePage] ,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
