import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  public getMoreData(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
