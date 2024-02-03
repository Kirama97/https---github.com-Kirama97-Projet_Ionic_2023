
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ARTICLE, disponibilite } from 'src/modele/article';
import { ServiceTechshopService } from '../service-techshop.service';
import { Camera, CameraResultType, CameraSource, GalleryImageOptions, GalleryPhotos } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


 


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
  imageSource :any ;
constructor(private serv :ServiceTechshopService, private domSanitizer :  DomSanitizer) { 
  
  this.New = {} as ARTICLE
  this.New.disponibilite= {} as disponibilite 
  this.New.image = [];
  this.New.etoile=[1,2,3]

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
 

  create(New: ARTICLE){
    this.serv.newArticle(New).subscribe(()=>{
      console.log("new =" , this.New);
    })
  }


ajoutimage = async () =>{
  const image = await Camera.getPhoto({
    quality:90, 
    allowEditing:true,
     resultType:CameraResultType.Uri,
    source:CameraSource.Prompt,
    saveToGallery:true
  });

  this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(image.webPath? image.webPath : "");
  console.log(this.imageSource);  

   // Obtenez le chemin web et la source de l'image
   const cheminWeb: string | undefined = this.imageSource

   // Sauvegardez l'image dans le dossier "images"
   const savedImage = await this.saveImage(cheminWeb);

   // Ajoutez le chemin de l'image sauvegardée au tableau New.image
   this.New.image.push(savedImage);

   // Affichez le chemin web de l'image dans la console
   console.log('Chemin de l\'image : ', cheminWeb);


 }
 getphoto(){
  return this.imageSource;
}

 // Fonction pour sauvegarder l'image dans le dossier "images"
async saveImage(imageSource: string | undefined): Promise<string> {
  if (imageSource) {
    const fileName = new Date().getTime() + '.jpeg'; // Nom du fichier basé sur la date actuelle
    const savedImage = await Filesystem.writeFile({
      path: '/assets/imgs' + fileName,
      data: imageSource,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });

    // Renvoie le chemin complet de l'image sauvegardée
    return savedImage.uri;
  } else {
    throw new Error('Chemin web de l\'image non disponible.');
  }

 




}


}
