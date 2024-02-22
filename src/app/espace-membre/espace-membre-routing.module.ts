import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspaceMembrePage } from './espace-membre.page';

const routes: Routes = [
  {
    path: '',
    component: EspaceMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspaceMembrePageRoutingModule {}
