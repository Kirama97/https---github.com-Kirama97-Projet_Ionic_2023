import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspaceMembrePageRoutingModule } from './espace-membre-routing.module';

import { EspaceMembrePage } from './espace-membre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspaceMembrePageRoutingModule
  ],
  declarations: [EspaceMembrePage]
})
export class EspaceMembrePageModule {}
