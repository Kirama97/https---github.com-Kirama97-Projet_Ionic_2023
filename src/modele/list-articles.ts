import { ARTICLE } from "./article";


export const Articles : ARTICLE[] =[

    {
        id: '1',
        titre :'BMW M3',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image : [
            "/assets/imgs/Article1/photo2.jpg",
            "/assets/imgs/Article1/photo3.jpg",
        ],
        prix : 15000,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2,3],
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1000,
        }
    },

    {
        id: '2',
        titre :'BMW M4',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article2/photo4.jpg',
            '/assets/imgs/Article2/photo5.jpg',
        ],
        prix : 20000 ,
        categorie: 'sport',
        state : 'Neuf',
        date : new Date,
        region:'Thies',
        etoile: [
            1
        ],
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :500,
        }
    },

    {
        id: '3',
        titre :'Ferrari superfast',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article3/photo7.jpg',
            '/assets/imgs/Article3/photo8.jpg',
        ],
        prix : 25000 ,
        categorie: 'Sport',
        state : 'Occasion',
        date : new Date,
        region:'Mbour',
        etoile: [
            1,2,3,4,5
        ],
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :2000,
        }
    },

    {
        id: '4',
        titre :'AUDI A8',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article4/photo9.jpg',
            '/assets/imgs/Article4/photo10.jpg',
        ],
        prix : 30000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2],
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1500,
        }
    },

    {
        id: '5',
        titre :'Aston Marting',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        image:[
            '/assets/imgs/Article5/photo11.jpg',
            '/assets/imgs/Article5/photo12.jpg',
        ],
        prix : 40000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2,3] ,
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1200,
        }
    },

    {
        id: '6',
        titre :'Lambborguini Urus',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article6/photo13.jpg',
            '/assets/imgs/Article6/photo14.jpg',
        ],
        prix : 35000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2,3,5] ,
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1300,
        }
    },

    {
        id: '7',
        titre :'Nissan GTR',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article7/photo15.jpg',
            '/assets/imgs/Article7/photo16.jpg',
        ],
        prix : 45000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2] ,
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1400,
        }
    },

    {
        id: '8',
        titre :'Cadillac scalet',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        image:[
            '/assets/imgs/Article8/photo17.jpg',
            '/assets/imgs/Article8/photo18.jpg',
        ],
        prix : 65000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2,3] ,
        disponibilite : {
         disponible :true,
         type :'livraison',
         frais :1600,
        }
    },

    {
        id: '9',
        titre :'Mercedes S63',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        image:[
            '/assets/imgs/Article9/photo19.jpg',
            '/assets/imgs/Article9/photo20.jpg',
        ],
        prix : 65000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Dakar',
        etoile:[1,2,3,4] ,
        disponibilite : {
        disponible :true,
        type :'livraison',
        frais :1300,
        }
    },

    {
        id: '10',
        titre :'Mercedes GLE',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:[
            '/assets/imgs/Article10/photo10.jpg',
            '/assets/imgs/Article10/photo21.jpg'
        ],
        prix : 75000 ,
        categorie: 'Sport',
        state : 'Neuf',
        date : new Date,
        region:'Tamba',
        etoile:[1,2,3] ,
        disponibilite : {
        disponible :true,
        type :'livraison',
        frais :3000,
        }
   }
  
   
]