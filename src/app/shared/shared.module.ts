import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IdFillPipe} from "./pipes/IdFillPipe";

@NgModule({
  declarations: [IdFillPipe],
  imports: [CommonModule],
  exports: [IdFillPipe]
})
export class SharedModule { }
