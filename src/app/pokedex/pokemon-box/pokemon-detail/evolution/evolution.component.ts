import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../../services/data.service";
import {PokemonEvolutionData} from "../interfaces/pokemon-detail-interfaces";

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  @Input() id!: number;
  evolutionChain: PokemonEvolutionData = {
    evolvesFrom: {
      name: '',
      img: ''
    },
    evolvesTo: {
      name: '',
      img: '',
      atLvl: 0,
      evolvesTo: {
        name: '',
        img: '',
        atLvl: 0
      }
    },
    evolutionStates: 0
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPokemonEvolutionChain(this.id).subscribe(evolutionChain => {
      this.evolutionChain = evolutionChain;
      console.log(this.evolutionChain);
    });
  }
}
