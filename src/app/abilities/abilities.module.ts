import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbilitiesComponent} from "./abilities.component";
import {AbilitiesRoutingModule} from "./abilities-routing.module";


@NgModule({
  declarations: [AbilitiesComponent],
  imports: [
    CommonModule,
    AbilitiesRoutingModule
  ]
})
export class AbilitiesModule {
}
