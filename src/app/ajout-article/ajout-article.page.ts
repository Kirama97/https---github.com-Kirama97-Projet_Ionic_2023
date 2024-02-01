
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.page.html',
  styleUrls: ['./ajout-article.page.scss'],
})
export class AjoutArticlePage implements OnInit {
New :any; 
articleForm: any;

constructor() { 
  
  this.New = {};

}
    
  ngOnInit() {
   
  }

  create(New: any){
    console.log("new =" , this.New);
    
  }
}
