import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'life-cycle';
  nameBtn = 'Carrinho';
  email = 'email';
  servicos: string[] = ['Comprar', 'Vender'];

  isAlive:boolean = true;
  disposeExibe: boolean = true;

  disposeTitle(){
    this.isAlive = false;
    this.disposeExibe = false;
  }
}
