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
  public grandtotal:number=0;

 ngOnInit() {
     this.getpanier()
     this.gettotal()
     
    
  }

  getpanier(){
    this.monserv.getCart().subscribe((data:CART[]) =>{
      this.panier =data;
  
   } )
  }

  Back(){
    this.router.navigate(['/home']);
  }

  gettotal(){
    this.panier.map((data:CART)=>{
      this.grandtotal +=data.somme
      console.log(this.grandtotal)
    })

  }
  deletearticle(article:CART){

    console.log(article)
    let id =article.id ? article.id:'';
    this.monserv.delete(id).subscribe(()=>{
      alert('supprimer avec succes')
      this.getpanier()
    })
  }


  // deletearticle(article:CART){

  //   console.log(article)
  //   let id =article.id
  //   this.monserv.delete(id).subscribe(()=>{
  //     alert('supprimer avec succes')
  //     this.getpanier()
  //   })
  // }
}
