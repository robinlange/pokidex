import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

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

  }

}
