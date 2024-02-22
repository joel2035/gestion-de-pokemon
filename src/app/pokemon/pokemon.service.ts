import { Injectable } from '@angular/core';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

@Injectable()

export class PokemonService {


  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId:number):Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id === pokemonId)
  }

  getPokemonTypeList():string[]{
    return [
        "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Vol",
      "Combat",
      "Psy"
    ]
  }

}
