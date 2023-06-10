import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../../services/data.service";
import {catchError, throwError} from "rxjs";
import {PokemonDetailData} from "./interfaces/pokemon-detail-interfaces";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonData: PokemonDetailData = {
    img: '',
    name: '',
    id: 0,
    types: [],
    abilities: [],
    stats: [],
    height: 0,
    weight: 0,
    moves: []
  };


  liked: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PokemonDetailComponent>,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPokemonDetail(this.data.id)
      .pipe(catchError((error: any) => {
          console.error(error);
          return throwError(error);
        })
      )
      .subscribe((response: PokemonDetailData): void => {
        this.pokemonData = response;
      });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getPokemonClasses(): any {
    if (this.pokemonData.types && this.pokemonData.types.length > 0) {
      const type: string = this.pokemonData.types[0].type.name;
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
    return {};
  }

}
