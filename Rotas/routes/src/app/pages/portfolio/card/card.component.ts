import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  //Aqui utilizamos uma injeção de dependencia
  constructor(private activeRoute: ActivatedRoute, private navegadorForcado: Router){
    //o subscribe é para quando sempre resgatarmos os dados.
    this.activeRoute.params.subscribe(res => console.log(res));

    //Para recuperarmos queryParams: 
    this.activeRoute.queryParams.subscribe(res => console.log(res));
  }


  //Fazer com que o component volte forçadamente para a page principal
  ngOnInit(): void {
    setInterval(() => {
      this.navegadorForcado.navigate(['/'])
    }, 5000)
  }
}
