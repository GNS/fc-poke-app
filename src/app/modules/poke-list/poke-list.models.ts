export interface PokeApiListResponse {
  results: PokeApiListItem[],
  count: number;
  next: string;
  previous: string;
}

export interface PokemonCard {
  name: string;
  id: number;
  id_full: string;
  stats: PokemonCardStat[];
  types: any[];
}

export interface PokemonCardStat {
  base_stat: string;
}

export interface PokeApiListItem {
  name: string;
  url: string;
  loaded: boolean;
}