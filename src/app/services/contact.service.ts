import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  addContact(contact: Contact):Observable<Contact>{
    return this.http.post<Contact>(
      environment.apiUrl + "/contact",
      contact,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
      }
    ).pipe(
        catchError(this.handleError<Contact>('addContact'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export interface Contact{
  name: string,
  email: string,
  message: string,
  token: string
}