import {Theme} from "./theme";
import {Editor} from "./editor";
import {User} from "./_models/user";
import {Commentaire} from "./_models/commentaires";

export class Game{

  constructor(public id: number, public nom: string, public  description: string, public  regles: string, public  langue: string,
              public url_media: string, public  age: number, public  poids: number, public  nombre_joueurs: number,
              public categorie: string, public duree: string, public theme_id: Theme, public editeur_id: Editor, public commentaires: Commentaire[], public user: User) {}

}

export enum Filter{
  NONE,
  user,
  age,
  editeur,
  theme,
}

export enum Sort{
  NONE,
  note,
  nom,
}


 export interface tarif{
   prixMax: number;
   prixMin: number;
   prixMoyen: number;
 }


 export interface statistiques{
  noteMax: number;
  noteMin: number;
  noteMoyenne: number;
  nbCommentaires: number;
  nbCommentairesTotal: number;
  rang: number;
  nbJeuxTheme: number;
 }

