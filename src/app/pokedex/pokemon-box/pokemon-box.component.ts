import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

@Component({
  selector: 'app-pokemon-box',
  templateUrl: './pokemon-box.component.html',
  styleUrls: ['./pokemon-box.component.css']
})
export class PokemonBoxComponent implements OnInit {
  @Input() index!: number;
  @Input() img!: string;
  @Input() name!: string;
  @Input() types!: [{slot: number, type: {name: string, url: string}}];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDetailPopup() {
    this.matDialog.open(PokemonDetailComponent, {
      data: {
        name: this.name
      }
    });
  }
}
