import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocationsComponent} from "./locations.component";
import {LocationsRoutingModule} from "./locations-routing.module";


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule {
}
