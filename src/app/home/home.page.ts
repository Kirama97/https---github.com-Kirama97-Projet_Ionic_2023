import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../../modele/list-articles';
import { ARTICLE } from '../../modele/article';
import { AlertController } from '@ionic/angular';
import { ListArticlePage } from '../list-article/list-article.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  isToastOpen: any;
setOpen(arg0: boolean) {
throw new Error('Method not implemented.');
}

 listArticles : ARTICLE[] = Articles

 constructor (private route : Router){}

  ngOnInit(): void {
  }

 goToListe(){

  this.route.navigate(['/list-article'])
 }



  



}


