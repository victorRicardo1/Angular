import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ firstComponent } from './aula-component/first.component';
import { TitleComponentComponent } from './title-component/title-component.component'

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    TitleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
