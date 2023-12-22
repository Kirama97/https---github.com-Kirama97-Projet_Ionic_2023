// export class ARTICLE {
//     id:number| undefined;
//     nom : string| undefined;
//     prix :number | undefined;
//     description : string | undefined;

// }

export class ARTICLE {
    id:string | undefined;
    titre : string | undefined;
    description:string | undefined;
    image:string[] | any; 
    prix : number | undefined ; 
    categorie:string | undefined;
    state : string| undefined;
    date : Date| undefined;
    region:string | undefined;
    etoile:number[]| undefined;
    disponibilite : disponibilite| undefined;

}

export class disponibilite {
    disponible :boolean | undefined;
    type :string | undefined;
    frais ?:number 
}