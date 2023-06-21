import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent implements OnChanges {
  @Input() hp!: number;
  @Input() attack!: number;
  @Input() defense!: number;
  @Input() sp_attack!: number;
  @Input() sp_defense!: number;
  @Input() speed!: number;
  total: number = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['hp'] &&
      changes['attack'] &&
      changes['defense'] &&
      changes['sp_attack'] &&
      changes['sp_defense'] &&
      changes['speed']
    ) {
      this.calculateTotal();
    }
  }

  private calculateTotal(): void {
    if (
      this.hp !== undefined &&
      this.attack !== undefined &&
      this.defense !== undefined &&
      this.sp_attack !== undefined &&
      this.sp_defense !== undefined &&
      this.speed !== undefined
    ) {
      this.total =
        this.hp +
        this.attack +
        this.defense +
        this.sp_attack +
        this.sp_defense +
        this.speed;
    }
  }
}
