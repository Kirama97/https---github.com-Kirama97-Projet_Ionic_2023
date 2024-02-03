
export interface ARTICLE {
    id:string ;
    titre : string ;
    Marque:string
    description:string ;
    image:string[] ; 
    prix : number  ; 
    categorie:string ;
    state : string;
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