import { Pipe, PipeTransform } from '@angular/core';
import { PokemonCard } from '../modules/poke-list/poke-list.models';

@Pipe({
  name: 'pokeSearch'
})
export class PokeSearchPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();
    return value.filter((item: PokemonCard) => {
      let matchFound = false;

      if (item.name && item.id_full) {
        const name = item.name;
        const index = item.id_full;

        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        const searchId = JSON.stringify(index).toLowerCase().includes(searchText);

        if (searchName || searchId) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }

}
