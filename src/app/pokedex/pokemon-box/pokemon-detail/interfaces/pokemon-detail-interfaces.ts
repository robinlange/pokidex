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
