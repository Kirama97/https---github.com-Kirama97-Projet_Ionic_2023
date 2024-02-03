import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ARTICLE } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';
import { CART } from 'src/modele/cart';

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

  totalcommande():void{
    this.monserv.getSommeTotale().subscribe(somme =>{
    this.sommetotal =somme
 })
   }

  Back(){
    this.router.navigate(['/home']);
  }


  deletearticle(article:CART){
   
    console.log(article)
    let id =article.id
    this.monserv. updateSommeTotaleAfterDelete(id).subscribe(()=> {
     
      this.getpanier()
    })
  }

deleteall(){
 
this.monserv.viderPanier().subscribe(() => {
  this.getpanier()
 
  this.monserv.getSommeTotale().subscribe(somme => {
   
  });
});

  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      this.getpanier()
      event.target.complete();
    }, 2000);
  }


  // public alertButtons = [
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //     handler: () => {
  //       console.log('Alert canceled');
  //     },
  //   },
  //   {
  //     text: 'OK',
  //     role: 'confirm',
  //     handler: () => {
  //       console.log('Alert confirmed');
  //     },
  //   },
  // ];

  


}
