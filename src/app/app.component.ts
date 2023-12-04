import { Component, OnInit } from '@angular/core';
import {POKEMONS} from "../models/mock-pokemon";
import Pokemon from "../models/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pokemonListe = POKEMONS;
constructor() {
}
  ngOnInit(){
  console.table(this.pokemonListe)
    this.selectPokemon(this.pokemonListe[0])
  }
  selectPokemon(pokemon:Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`)
  }
}
