import { Component, OnInit } from '@angular/core';

import { PokeApiListItem, PokemonCard } from '../../poke-list.models';
import { PokeListService } from '../../poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: PokemonCard[] = [];

  pokeSearchQuery: string = "";
  pokeTypesSelected = [];
  pokeTypeList: PokeApiListItem[] = [];

  constructor(
    private pokeSvc: PokeListService
  ) { }

  ngOnInit(): void {
    this.loadPokemons();
    this.loadPokemonTypes();
  }

  private loadPokemons() {
    this.pokeSvc.getList().subscribe((res) => {
      if (res && res.results && Array.isArray(res.results)) {
        res.results.forEach(itm => {
          itm.loaded = false;
          const pokeCard: PokemonCard = Object.assign(itm);
          this.pokemons.push(pokeCard);
          this.getPokemonDetails(itm.url);
        });
      }
    })
  }

  private loadPokemonTypes() {
    this.pokeSvc.getPokemonTypes().subscribe((res) => {
      if (res && res.results && Array.isArray(res.results)) {
        this.pokeTypeList = res.results;
      }
    })
  }

  private getPokemonDetails(pokeUrl: string) {
    this.pokeSvc.getPokemon(pokeUrl).subscribe((res: any) => {
      res.loaded = true;
      const pokeItm = this.pokemons.findIndex((p: any) => p.name == res.name);
      if (res.name.endsWith("-m")) res.name = res.name.slice(0, -2) + ' ♂️';
      if (res.name.endsWith("-f")) res.name = res.name.slice(0, -2) + ' ♀️';
      res.id_full = res.id.toString().padStart(3, '0')
      this.pokemons[pokeItm] = res;
    })
  }
}
