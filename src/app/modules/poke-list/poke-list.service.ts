import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from 'src/app/app.endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(ApiEndpoints.pokeList);
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
