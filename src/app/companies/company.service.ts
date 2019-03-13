import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Company } from '../shared/models/Company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
const baseUrl = "http://localhost:3000";
const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  loadCompanies(): Observable<Company[]>{
     return this.http.get<Company[]>(`${baseUrl}/companies`)
     .pipe(
       catchError(this.handleError)
     )
  }


  createCompany(company: Company): Observable<Company> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Company>(`${baseUrl}/companies`, company, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  updateCompany(company: Company): Observable<Company> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Company>(`${baseUrl}/companies/${company.id}`, company, {headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteCompany(id: string): Observable<Company>{
    return this.http.delete<Company>(`${baseUrl}/companies/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  } 


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
