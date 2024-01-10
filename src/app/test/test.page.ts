import { Component, OnInit } from '@angular/core';
import { ARTICLE } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';
import { CATEGORIE } from 'src/modele/categories';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  listesarticles :ARTICLE[] = [];
  listescategories:CATEGORIE[]= [];

  constructor(private monserv : ServiceTechshopService) { }
 
  ngOnInit() {
   
    this.monserv.getarticle().subscribe((data:ARTICLE[]) => {
      this.listesarticles =data
    })
    this.monserv.getcategorie().subscribe((data:CATEGORIE[]) => {
       this.listescategories = data

    })

  }


}
