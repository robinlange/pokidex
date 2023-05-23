import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TypeChartsComponent} from "./type-charts.component";

const routes: Routes = [
  {
    path: '',
    component: TypeChartsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeChartsRoutingModule {
}
