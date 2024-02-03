import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import { FrancPipe } from '../franc.pipe';
import { RouterModule } from '@angular/router';

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    RouterModule.forChild([{ path: '', component: DetailsPage }])

   
  ],
  declarations: [DetailsPage,FrancPipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsPageModule {}
