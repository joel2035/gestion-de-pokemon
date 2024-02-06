import { Component } from '@angular/core';
import Pokemon from "../../models/pokemon";
import POKEMONS from "../../models/mock-pokemon";

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styles: [
  ]
})
export class ListePokemonComponent {
  PokemonList:Pokemon[] = POKEMONS;
}
