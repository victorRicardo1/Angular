import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  aparece:boolean = true;
  produtos:string[] = []
  menuType:string = "diretor"

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  desaparecer(){
    if(this.aparece === true) this.aparece = false;
    else this.aparece = true;
  }

  adicionar(){
    this.produtos.push("Richard")
  }
  remover(index:number){
    this.produtos.splice(index, 1);
  }
}
