import { Component, OnInit } from '@angular/core';
import { PokemonListResponse } from '../../poke-list.models';
import { PokeListService } from '../../poke-list.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: any = [];

  constructor(
    private pokeSvc: PokeListService
  ) { }

  ngOnInit(): void {
    this.loadPokemons()
  }

  private loadPokemons() {
    this.pokeSvc.getList().subscribe((res: PokemonListResponse) => {
      if (res && res.results && Array.isArray(res.results)) {
        res.results.forEach(itm => {
          itm.loaded = false;
          this.pokemons.push(itm);
          this.getPokemonDetails(itm.url);
        });
      }
    })
  }

  private getPokemonDetails(pokeUrl: string) {
    this.pokeSvc.getPokemon(pokeUrl).subscribe((res: any) => {
      console.log(res);
      res.loaded = true;
      const pokeItm = this.pokemons.findIndex((p: any) => p.name == res.name);
      if (res.name.endsWith("-m")) res.name = res.name.slice(0, -2) + ' ♂️';
      if (res.name.endsWith("-f")) res.name = res.name.slice(0, -2) + ' ♀️';
      res.id_full = res.id.toString().padStart(3, '0')
      this.pokemons[pokeItm] = res;
    })
  }
}
