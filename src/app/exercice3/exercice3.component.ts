import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  public statut: boolean = true;
  public paragraphe: string = "P1";
  constructor() {}

  public inverser(): void {
    this.statut = !this.statut;
    
      this.paragraphe = this.statut ? "P2":"P1";
    
  }

  ngOnInit(): void {}
}
