import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeTypes'
})
export class PokeTypesPipe implements PipeTransform {

  transform(value: any, filters?: any): any {
    if (!value) {
      return;
    }
    if (!filters || filters == '') {
      return value;
    }

    return value.filter((item: any) => {
      let matchFound = false;
      if (item.types) {
        filters.forEach((filter: any) => {
          if (!matchFound)
            matchFound = (item.types.filter((itm: any) => itm.type.name == filter).length > 0);
        });
      }
      return matchFound;
    });
  }

}
