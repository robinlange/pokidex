import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokedex',
    pathMatch: 'full'
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path: 'moves',
    loadChildren: () => import('./moves/moves.module').then(m => m.MovesModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities/abilities.module').then(m => m.AbilitiesModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'type-charts',
    loadChildren: () => import('./type-charts/type-charts.module').then(m => m.TypeChartsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
