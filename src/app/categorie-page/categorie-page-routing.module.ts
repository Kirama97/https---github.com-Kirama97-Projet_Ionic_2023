import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriePagePage } from './categorie-page.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CategoriePagePageRoutingModule {}
