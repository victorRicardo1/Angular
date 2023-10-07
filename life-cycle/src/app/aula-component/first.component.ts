import {Component, Input} from '@angular/core';

@Component({
    selector: 'first-component',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})

export class firstComponent{
    @Input() label = '';
    placeholder:string = 'email'
    placepass:string = 'senha'
    color:string = 'red';
    getEvent(){
        alert(this.placepass)
    }
}