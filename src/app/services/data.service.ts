import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getPokemons(offset: number): Observable<any> {
    return this.http.get(`http://localhost:8080/pokemonsData?offset=${offset}`);
  }

  public getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/pokemonDetailData?id=${id}`);
  }
}
