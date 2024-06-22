import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from "./items.component";
import {ItemsRoutingModule} from "./items-routing.module";
import { ItemBoxComponent } from './item-box/item-box.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ItemBoxSkeletonComponent } from './item-box-skeleton/item-box-skeleton.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [ItemsComponent, ItemBoxComponent, ItemBoxSkeletonComponent],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        NgxPaginationModule,
        SharedModule
    ]
})
export class ItemsModule {
}
