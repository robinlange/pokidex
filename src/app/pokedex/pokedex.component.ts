import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number = 1181;
  fetching: boolean = false;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.page = queryParams['page'] <= Math.ceil(this.totalPokemons / 12) && queryParams['page'] > 1 ? queryParams['page'] : 0  || 1;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.page
        }
      });
    });
    this.getPokemons();
  }

  public getPokemons(): void {
    this.fetching = true;
    this.dataService.getPokemons((this.page - 1) * 12).subscribe((response: [{
                                                                    id: number,
                                                                    name: string,
                                                                    img: string,
                                                                    types: { slot: number, type: { name: string, url: string } }
                                                                  }]
    ): void => {
      response.forEach((pokemon: {
        id: number,
        name: string,
        img: string,
        types: { slot: number, type: { name: string, url: string } }
      }): void => {
        this.pokemons.push(pokemon);
      })
    });
    this.fetching = false;
  }

  public onPageChange($event: number): void {
    this.page = $event;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    });
    this.pokemons = [];
    this.getPokemons();
  }
}
