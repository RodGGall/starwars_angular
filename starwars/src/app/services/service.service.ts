import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })
  export class StarWarsService {

    constructor(private http: HttpClient) { }

    getPersonajes(page?: number): Observable<any> {
      let url;
      if (page) {
        url = environment.url + `people/?page=${page}`;
      } else {
        url = environment.url + `people`;
      }
        return this.http.get(url).pipe(
          catchError(this.handleError<any>('getPersonajes'))
        );
    }

    getPlanetas(page?: number): Observable<any> {
      let url;
      if (page) {
        url = environment.url + `planets/?page=${page}`;
      } else {
        url = environment.url + `planets`;
      }
        return this.http.get(url).pipe(
          catchError(this.handleError<any>('getPlanetas'))
        );
    }

    getPersonaje(nombre: string): Observable<any> {
        const url = environment.url + `people/?search=${nombre}`;
        return this.http.get(url).pipe(
          catchError(this.handleError<any>('getPersonaje'))
        );
    }

    getPersonajeById(id: number): Observable<any> {
      const url = environment.url + `people/${id}`;
      return this.http.get(url).pipe(
        catchError(this.handleError<any>('getPersonaje'))
      );
  }

  getVarios(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError<any>('getVarios'))
    );
  }

    private handleError<T>(operation = 'operation', result?: T) {

      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        // this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  }
