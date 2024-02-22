import {Component, OnInit} from '@angular/core';
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styles: [
  ]
})
export class ListePokemonComponent implements OnInit{
  PokemonList:Pokemon[];
  constructor(private router:Router, private pokemonService: PokemonService) {}
ngOnInit() {
    this.PokemonList = this.pokemonService.getPokemonList();
}

  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
