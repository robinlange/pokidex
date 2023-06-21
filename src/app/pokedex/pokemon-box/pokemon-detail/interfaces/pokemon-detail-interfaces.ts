export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetailData {
  abilities: Ability[];
  height: number;
  id: number;
  img: string;
  moves: Move[];
  name: string;
  stats: number[];
  types: Type[];
  weight: number;
}

export interface PokemonEvolutionData {
  evolvesFrom: {
    name: string,
    img: string
  },
  evolvesTo: {
    name: string,
    img: string,
    atLvl: number,
    evolvesTo: {
      name: string,
      img: string,
      atLvl: number
    }
  },
  evolutionStates: number
}
