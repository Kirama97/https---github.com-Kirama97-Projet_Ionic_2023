import { ARTICLE } from "./article";

export class CATEGORIE {
    id:number | undefined;
    titre :string | undefined;
    description : string | undefined;
    icone:string| undefined;
    articles :ARTICLE[] | undefined
}