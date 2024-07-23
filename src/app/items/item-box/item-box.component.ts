import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {
  @Input() id!: number;
  @Input() img!: string;
  @Input() name!: string;
  @Input() category!: string;
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  public getItemClasses() {
    const category: string = this.category;
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

  public openDetailPopup(): void{
    this.matDialog.open(ItemDetailComponent, {
      panelClass: 'item-detail-dialog-container',
      data: {
        id: this.id
      }
    });
  }

}
