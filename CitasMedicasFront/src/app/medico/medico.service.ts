import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private apiURL = "https://localhost:8000/api/medico/";

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(medico: any): Observable<Medico>{       //Error en medico por tipo de dato
    return this.httpClient.post<Medico>(this.apiURL, JSON.stringify(medico), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id_medico: any): Observable<Medico>{
    return this.httpClient.get<Medico>(this.apiURL + id_medico)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id_medico: any, medico: any): Observable<Medico>{
    return this.httpClient.put<Medico>(this.apiURL + id_medico, JSON.stringify(medico), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id_medico: any){
    return this.httpClient.delete<Medico>(this.apiURL + id_medico, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }){
    let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
      }else{
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
  }
}
