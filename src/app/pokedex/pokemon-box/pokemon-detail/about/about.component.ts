import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() species!: string;
  @Input() height!: number;
  @Input() weight!: number;
  @Input() abilities!: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
