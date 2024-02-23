import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import Pokemon from "../models/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon:Pokemon;
 types:string[];

  constructor(private pokemonService:PokemonService, private router:Router) {
  }
  ngOnInit() {
  this.types = this.pokemonService.getPokemonTypeList();
  }
  hasType(type:string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event:Event, type:string){
    const isChecked:boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type)
    }else {
     const index:number = this.pokemon.types.indexOf(type);
     this.pokemon.types.splice(index, 1)
    }

  }

  onSubmit(){
  console.log("submit form !");
    this.router.navigate(['/pokemon', this.pokemon.id ])
  }

  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length ==1 && this.hasType(type)) {
       return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true
  }

}
