import { Component, OnInit } from '@angular/core';
import {POKEMONS} from "../models/mock-pokemon";
import Pokemon from "../models/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements  OnInit{
  PokemonList:Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.PokemonList)

  }
  selectPokemon(){
  }
}