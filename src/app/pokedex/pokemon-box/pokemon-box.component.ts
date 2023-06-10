import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

@Component({
  selector: 'app-pokemon-box',
  templateUrl: './pokemon-box.component.html',
  styleUrls: ['./pokemon-box.component.css']
})
export class PokemonBoxComponent implements OnInit {
  @Input() id!: number;
  @Input() img!: string;
  @Input() name!: string;
  @Input() types!: [{slot: number, type: {name: string, url: string}}];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }

  public openDetailPopup(): void {
    this.matDialog.open(PokemonDetailComponent, {
      panelClass: 'pokemon-detail-dialog-container',
      data: {
        id: this.id
      }
    });
  }

  public getPokemonClasses(): any {
    const type: string = this.types[0].type.name;
    return {
      'grass': type === 'grass',
      'fire': type === 'fire',
      'water': type === 'water',
      'electric': type === 'electric',
      'bug': type === 'bug',
      'normal': type === 'normal',
      'poison': type === 'poison',
      'ground': type === 'ground',
      'fairy': type === 'fairy'
    };
  }
}
