import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent {
  estilo:string = "enable"
  corFundo:string = "green";
  corFonte:string = "blue";
  item:string = ""
  lista:string[] = [];
  preenchido:Boolean = true;

  mudarCor(){
    if(this.estilo === "enable"){
      this.estilo = "disable";
    }else{
      this.estilo = "enable";
    }
  }

  adicionarLista(){
    if(this.item === ''){
      this.preenchido = false;
    }else{
      this.lista.push(this.item);
    }
  }

  tentarNovamente(){
    this.preenchido = true;
  }
}
