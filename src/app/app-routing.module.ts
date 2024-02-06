import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListePokemonComponent} from "./liste-pokemon/liste-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";

const routes: Routes = [
  {
    path:'pokemon',
    component:ListePokemonComponent
  },
  {
    path:'pokemon/:id',
    component:DetailPokemonComponent
  },
  {
    path:"",
    redirectTo: "pokemon",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
