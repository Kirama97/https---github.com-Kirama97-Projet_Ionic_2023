
export interface ARTICLE {
    id:string ;
    titre : string ;
    description:string ;
    image:string[] ; 
    prix : number  ; 
    categorie:string ;
    date : Date;
    region:string ;
    etoile:number[];
    disponibilite: disponibilite;

}

export interface disponibilite {
    disponible :boolean ;
    type :string ;
    frais :number 
}