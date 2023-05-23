import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeChartsComponent} from "./type-charts.component";
import {TypeChartsRoutingModule} from "./type-charts-routing.module";


@NgModule({
  declarations: [TypeChartsComponent],
  imports: [
    CommonModule,
    TypeChartsRoutingModule
  ]
})
export class TypeChartsModule {
}
