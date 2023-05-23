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
    this.dataService.getPokemons(12, this.page)
      .subscribe((response: any) => {
        this.totalPokemons = response.count

        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((response: any) => {
              this.pokemons.push(response);
              // console.log(response);
            });
        });
      });
  }

  protected readonly String = String;
}
