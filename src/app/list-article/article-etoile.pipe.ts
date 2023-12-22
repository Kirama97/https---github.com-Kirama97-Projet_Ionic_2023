import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleEtoile'
})
export class ArticleEtoilePipe implements PipeTransform {

  transform(etoile: number): string  {

   let icone :string;

   switch (etoile) {
    case 1:
      icone =' <ion-icon class="etoile_icon" name="star"></ion-icon>'
      break;
    case 2:
      icone =' <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon>'
      break;
    case 3:
      icone=' <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon>'
      break;
    case 4:
      icone = ' <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon>'
      break;
    case 5:
      icone=' <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon> <ion-icon class="etoile_icon" name="star"></ion-icon>'
      break;
   
    default:
      icone =' <ion-icon class="etoile_icon" name="star"></ion-icon>';
      break;
   }
   
    return 'icone';

  }

}
