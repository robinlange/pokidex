import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokedexComponent} from "./pokedex.component";
import {PokedexRoutingModule} from "./pokedex-routing.module";
import { PokemonBoxComponent } from './pokemon-box/pokemon-box.component';
import {NgxPaginationModule} from "ngx-pagination";
import { PokemonDetailComponent } from './pokemon-box/pokemon-detail/pokemon-detail.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    PokedexComponent,
    PokemonBoxComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatDialogModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule {
}
