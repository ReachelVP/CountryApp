import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }

  searchCapital (term: string): Observable<Country[]>{
    //return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`);
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
     catchError( error => {
      console.log(error);
      return of([])
     })
    );
  }

  searchCountry (term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
     catchError( error => {
      console.log(error);
      return of([])
     })
    );
  }

  searchRegion (term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
     catchError( error => {
      console.log(error);
      return of([])
     })
    );

  }
}
