import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovesComponent} from "./moves.component";

const routes: Routes = [
  {
    path: '',
    component: MovesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovesRoutingModule {
}
