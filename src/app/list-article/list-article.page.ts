import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ARTICLE } from 'src/modele/article';
import { Articles } from 'src/modele/list-articles';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.page.html',
  styleUrls: ['./list-article.page.scss'],
})
export class ListArticlePage implements OnInit {

  constructor(private route :Router) { }
  listArticles : ARTICLE[] = Articles;

  gotodetails(article:ARTICLE) {
    console.log(article)
   this.route.navigate(['/details',article]);
  }


  ngOnInit() {
  }

}
