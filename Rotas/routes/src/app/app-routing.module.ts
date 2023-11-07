import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch: 'full'},
  //Caso queiramos pegar um porfolio especifico por exemplo utilizamos /:id apos o nome do caminho.
  {path: 'porfolio', component: CardComponent, children: [{path: '/:id', component: CardComponent}]},
  //Path coringa: ** pra dizer que é qualquer coisa colocada, vai redirecionar para a rota que tem '' como url, ou seja, nosso Title
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
