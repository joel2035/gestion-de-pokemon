import { Component } from '@angular/core';
import Pokemon from "../../models/pokemon";
import POKEMONS from "../../models/mock-pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styles: [
  ]
})
export class ListePokemonComponent {

  constructor(private router:Router) {}
  PokemonList:Pokemon[] = POKEMONS;
  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
