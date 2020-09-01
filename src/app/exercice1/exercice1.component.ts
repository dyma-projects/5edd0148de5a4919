import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  maClsseStyle:string;
  typeInput:string;

  constructor() {
    this.maClsseStyle = "backgroundRed" ;
    this.typeInput="texte";
   }
   /*
   public modifierType(event:Event){
     console.log(event);
   }
   */
   public modifierType(type:string){
    console.log(type);
    this.typeInput=type;
  }
  
  ngOnInit(): void {  }


}
