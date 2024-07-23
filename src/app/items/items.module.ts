import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from "./items.component";
import {ItemsRoutingModule} from "./items-routing.module";
import { ItemBoxComponent } from './item-box/item-box.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ItemBoxSkeletonComponent } from './item-box-skeleton/item-box-skeleton.component';
import {SharedModule} from "../shared/shared.module";
import { ItemDetailComponent } from './item-box/item-detail/item-detail.component';
import {IonicModule} from "@ionic/angular";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [ItemsComponent, ItemBoxComponent, ItemBoxSkeletonComponent, ItemDetailComponent],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        NgxPaginationModule,
        SharedModule,
        IonicModule,
        MatDialogModule,
        MatTabsModule
    ]
})
export class ItemsModule {
}
