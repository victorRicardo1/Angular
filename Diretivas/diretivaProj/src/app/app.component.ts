import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivaProj';
  exibir: boolean = true;

  showUnShow(){
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true; 
    }
  }
}
