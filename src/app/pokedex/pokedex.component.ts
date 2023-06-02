import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 0;
  totalPokemons!: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(): void {
    this.dataService.getPokemons(this.page).subscribe((response: {
      name: string,
      img: string,
      types: { slot: number, type: { name: string, url: string } }
    }) => {
      console.log(response);
    });
  }
}
