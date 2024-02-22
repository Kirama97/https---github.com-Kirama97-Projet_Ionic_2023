import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ARTICLE } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';
import { CART } from 'src/modele/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  
  constructor(private route:ActivatedRoute,private router:Router,public menuCtrl:MenuController , private monserv: ServiceTechshopService) {
   }
  listArticles:ARTICLE[] | undefined
  article:ARTICLE|undefined
  panier :CART[]=[]
  public sommetotal :number = 0
  public indice :number = 0
  
 


 ngOnInit() {
     this.getpanier()
   
  }

  getpanier(){
    this.monserv.getCart().subscribe((data:CART[]) =>{
      this.panier =data;
     this.indice =data.length
      this.totalcommande()
   } )
  }

  // la somme total de la commande

  totalcommande():void{
    this.monserv.getSommeTotale().subscribe(somme =>{
    this.sommetotal =somme
 })
   }

  Back(){
    this.router.navigate(['/home']);
  }

// supression d'un article

  deletearticle(article:CART){
   
    console.log(article)
    let id =article.id
    this.monserv. updateSommeTotaleAfterDelete(id).subscribe(()=> {
     
      this.getpanier()
    })
  }


// comme j'ai pas en encore de solution pour vider le tableau ,je vais initialisé un tableau vide,mais reapparait apres actualisation

deleteall(){
   this.panier= [];

  }


  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      this.getpanier()
      event.target.complete();
    }, 2000);
  }



  


}
