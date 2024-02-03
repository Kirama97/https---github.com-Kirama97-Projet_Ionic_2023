
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ARTICLE, disponibilite } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';
import { Camera, CameraResultType, CameraSource, GalleryImageOptions, GalleryPhotos } from '@capacitor/camera';


@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.page.html',
  styleUrls: ['./ajout-article.page.scss'],
})
export class AjoutArticlePage implements OnInit {
New :ARTICLE; 

listArticles:ARTICLE[] =[];
article:ARTICLE|undefined 
  tableauImages: any;
constructor(private serv :ServiceTechshopService) { 
  
  this.New = {} as ARTICLE
  this.New.disponibilite= {} as disponibilite 
  this.New.image = [];
  this.New.etoile=[1,2,3]

}
    
  ngOnInit() {
   
  }

  create(New: ARTICLE){
    this.serv.newArticle(New).subscribe(()=>{
      console.log("new =" , this.New);
    })
  }


  // async ajoutimage() {
  //    const image = await Camera.getPhoto({
  //      quality: 90,
  //      allowEditing: false,
  //      resultType: CameraResultType.Uri,
  //      source: CameraSource.Photos,
  //    });
  //   var imageUrl = image.format
 
  //    // Utilisez 'image.webPath' pour afficher la photo dans votre application
  //    // Par exemple, vous pouvez l'afficher dans une balise <img> dans le HTML.
  //    console.log('Chemin de l\'image : ', imageUrl)
 
  // }

  async ajoutimage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
      });
  
      // Obtenez le chemin web et la source de l'image
      const cheminWeb :string | undefined= image.dataUrl;
  
  
      // Créez un objet PhotoAvecSource pour stocker ces informations
      
  
      // Ajoutez l'objet à votre tableau d'objets
      // Assurez-vous que votre tableau existe en tant que propriété de classe
      // this.New.image.push(cheminWeb);
  
      // Utilisez 'image.webPath' pour afficher la photo dans votre application
      // Par exemple, vous pouvez l'afficher dans une balise <img> dans le HTML.
      console.log(cheminWeb);
 
    } catch (erreur) {
      // Gérez les erreurs ici
      console.error('Erreur lors de la récupération de l\'image :', erreur);
    }
  



  // async ajoutimage() {

  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Photos,
  //   });
  //  var imageUrl = image.webPath
  //  SVGImageElement.arguments = imageUrl;

  //   // Utilisez 'image.webPath' pour afficher la photo dans votre application
  //   // Par exemple, vous pouvez l'afficher dans une balise <img> dans le HTML.
  //   console.log('Chemin de l\'image : ', imageUrl)
 
   }

 
}
