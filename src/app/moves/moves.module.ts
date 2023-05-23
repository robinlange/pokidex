import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovesComponent} from "./moves.component";
import {MovesRoutingModule} from "./moves-routing.module";

@NgModule({
  declarations: [MovesComponent],
  imports: [
    CommonModule,
    MovesRoutingModule
  ],
  exports: [MovesComponent]
})
export class MovesModule {
}
