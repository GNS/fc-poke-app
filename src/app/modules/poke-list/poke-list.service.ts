import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from 'src/app/app.endpoints';
import { Observable } from 'rxjs';
import { PokeApiListResponse } from './poke-list.models';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<PokeApiListResponse> {
    return this.http.get<PokeApiListResponse>(ApiEndpoints.pokeList);
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonTypes(): Observable<PokeApiListResponse> {
    return this.http.get<PokeApiListResponse>(ApiEndpoints.pokeTypes);
  }
}
