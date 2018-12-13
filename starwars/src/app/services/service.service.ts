import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Personaje } from '../models/personaje';
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

    getPersonajes(): Observable<Personaje[]> {
        const url = environment.url + `people`;
        return this.http.get<Personaje[]>(url).pipe();
    }

    getPErsonaje(id: string): Observable<Personaje> {
        const url = environment.url + `people/${id}`;
        return this.http.get<Personaje>(url).pipe();
    }
  }
