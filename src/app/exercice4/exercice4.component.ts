import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice4",
  templateUrl: "./exercice4.component.html",
  styleUrls: ["./exercice4.component.css"],
})
export class Exercice4Component implements OnInit {
  public texts: Array<string> = [];
  constructor() {
    this.texts[0] = "Un";
    this.texts[1] = "Deux";
    this.texts[2] = "Trois";
  }

  ngOnInit(): void {}
}
