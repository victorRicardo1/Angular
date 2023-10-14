import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy,Input} from '@angular/core';

//OnInit é uma interface que é um evento que vai ser disparado quando o component é iniciado
//OnChanges faz com que um evento seja iniciado quando uma mudança ocorre
//DoCheck executa quando uma propriedade do component é verificada

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css']
})
export class TitleComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{
  @Input() nome:string = '';
  numero:number = 0;
  constructor(){
    console.log('construtor');
  }
  //Quando iniciar, ele vai a mensagem
  ngOnInit(): void {
    console.log('OnInit');
  }
  //Vai mostrar a mensagem quando algo muda
  ngOnChanges(): void {
    console.log('OnChange');
  }

  //CHECKS //

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  //Executa quando angular realizar qualquer projeção de conteudo apos ser iniciado
  ngAfterContentInit(){
    console.log("NgAfterContentInit");
  }

  //Executa depois que um componente é verificado pelo mecanismo de alteração do angular
  ngAfterContentChecked(){
    console.log("NgAfterContenrChecked");
  }
  
  //Executa depois que um componente é totalmente atualizado(carregou tudo)
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  //Executa quando a visualização de um comónente é verificada pelo algoritmo de detecção de alterações angular  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
     console.log("Good bye my component friend");
  }

  decrementar(){
    this.numero -= 1;
  }
  icrementar(){
    this.numero += 1;
  }   

}
