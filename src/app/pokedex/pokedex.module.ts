import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokedexComponent} from "./pokedex.component";
import {PokedexRoutingModule} from "./pokedex-routing.module";
import {PokemonBoxComponent} from './pokemon-box/pokemon-box.component';
import {NgxPaginationModule} from "ngx-pagination";
import {PokemonDetailComponent} from './pokemon-box/pokemon-detail/pokemon-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import {IdFillPipe} from "./pipes/IdFillPipe";
import {IonicModule} from "@ionic/angular";
import {MatTabsModule} from "@angular/material/tabs";
import {AboutComponent} from './pokemon-box/pokemon-detail/about/about.component';
import {BaseStatsComponent} from './pokemon-box/pokemon-detail/base-stats/base-stats.component';
import {EvolutionComponent} from './pokemon-box/pokemon-detail/evolution/evolution.component';
import {MovesComponent} from './pokemon-box/pokemon-detail/moves/moves.component';
import {WeightConvertPipe} from "./pipes/WeightConvertPipe";
import {HeightConvertPipe} from "./pipes/HeightConvertPipe";
import {AbilitiesConvertPipe} from "./pipes/AbilitiesConvertPipe";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {SharedModule} from "../shared/shared.module";
import { SkeletonComponent } from './skeleton/skeleton.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokemonBoxComponent,
    PokemonDetailComponent,
    AboutComponent,
    BaseStatsComponent,
    EvolutionComponent,
    MovesComponent,
    IdFillPipe,
    WeightConvertPipe,
    HeightConvertPipe,
    AbilitiesConvertPipe,
    SkeletonComponent
  ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        MatDialogModule,
        PokedexRoutingModule,
        IonicModule,
        MatTabsModule,
        MatProgressBarModule,
        SharedModule
    ]
})
export class PokedexModule {
}
