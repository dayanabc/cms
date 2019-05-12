export class Document{


    constructor( public documentId: number,
                 public documentName: string,
                 public description: string,
                 public documentUrl: string,
                 public children: string){
       

    }
}