import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  aparece:boolean = true;
  produtos:string[] = []
  menuType:string = "user"
  itemAdd:string = '';

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
    this.produtos.push(this.itemAdd)
  }
  remover(index:number){
    this.produtos.splice(index, 1);
  }
}
