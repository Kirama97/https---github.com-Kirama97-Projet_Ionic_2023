import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ARTICLE } from '../../modele/article';
// import { Articles } from '../../modele/list-articles';
import {register} from 'swiper/element/bundle';
import { MenuController, ToastController, ToastOptions } from '@ionic/angular';
import { ServiceTechshopService } from '../service-techshop.service';
import { CART } from 'src/modele/cart';
import { async } from 'rxjs';


register();


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  isToastOpen = false;

  constructor(private route:ActivatedRoute,private router:Router,public menuCtrl:MenuController , private monserv: ServiceTechshopService,private toast : ToastController) { }
  listArticles:ARTICLE[] | undefined
  article:ARTICLE|undefined
  panier :CART[]=[]
  public indice:number =0


  ngOnInit() {
  
    this.getpanier()
    
    this.monserv.getarticle().subscribe((data1:ARTICLE[]) =>{
      this.listArticles =data1

      const articleId :string|null =this.route.snapshot.paramMap.get('id')
      if(articleId){
        this.article =this.listArticles.find(article =>article.id == articleId)
      }
    } )
   
  
  }

  // retourner dans la page list-article
  Back(){
    this.router.navigate(['/list-article']);
  }

  // la recuperation des article de notre panier
  getpanier(){
    this.monserv.getCart().subscribe((data:CART[]) =>{
      this.panier =data;
      this.indice = data.length
    

   } )
  }
  // l'ajout d'un article au panier 
   ajoutcart(article:ARTICLE) : void{

      this.monserv.ajout(article).subscribe(() => {
        this.getpanier();
        console.log("ajouter")
        
      })
  }



  }



 

