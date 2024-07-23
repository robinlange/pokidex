import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getPokemons(offset: number): Observable<any> {
    return this.http.get(`${environment.backendURL}pokemonsData?offset=${offset}`);
  }

  public getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`${environment.backendURL}pokemonDetailData?id=${id}`);
  }

  public getPokemonEvolutionChain(id: number): Observable<any> {
    return this.http.get(`${environment.backendURL}pokemonEvolutionChainData?id=${id}`);
  }

  public getItems(offset: number): Observable<any> {
    return this.http.get(`${environment.backendURL}items?offset=${offset}`);
  }

  public getItemDetail(id: number): Observable<any> {
    return this.http.get(`${environment.backendURL}itemDetailData?id=${id}`);
  }
}
