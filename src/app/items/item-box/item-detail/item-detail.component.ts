import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {catchError, throwError} from "rxjs";
import {ItemDetailContent} from "./interfaces/item-detail-interfaces";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  itemDetailData: ItemDetailContent = {
    name: "",
    id: 0,
    img: "",
    effect: "",
    short_effect: "",
    category: "",
    cost: 0,
    attributes: []
  };
  liked: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ItemDetailComponent>,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getItemDetail(this.data.id).pipe(catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
    )
      .subscribe((response: ItemDetailContent): void => {
        this.itemDetailData = response;
      });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getItemClasses() {
    if (this.itemDetailData.category && this.itemDetailData.category.length > 0) {
      const category: string = this.itemDetailData.category;
      return {
        'standard-balls': category === 'standard-balls',
        'special-balls': category === 'special-balls',
        'healing': category === 'healing',
        'status-cures': category === 'status-cures',
        'vitamins': category === 'vitamins',
        'stat-boosts': category === 'stat-boosts',
        'revival': category === 'revival',
        'pp-recovery': category === 'pp-recovery',
      };
    }
    return {};
  }
}
