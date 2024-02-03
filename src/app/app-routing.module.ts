import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
     redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'list-article',
    loadChildren: () => import('./list-article/list-article.module').then( m => m.ListArticlePageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'categorie-page',
    loadChildren: () => import('./categorie-page/categorie-page.module').then( m => m.CategoriePagePageModule)
  },
 
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'ajout-article',
    loadChildren: () => import('./ajout-article/ajout-article.module').then( m => m.AjoutArticlePageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
