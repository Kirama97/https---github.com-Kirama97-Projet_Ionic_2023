import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'franc',
})
export class FrancPipe implements PipeTransform {
  transform(prix: number): string {
   
    const tauxDeChange = 655.96; 

    const montantEnCfa = prix * tauxDeChange;

    return `${montantEnCfa.toFixed(2)} XOF`; 
  }
}
