import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from './contact';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseURL = 'https://api.bryson.tech/contact'

  constructor(private http: HttpClient) { }

  getToken (): Observable<Token> {
    return this.http.get<Token>(this.baseURL)
      .pipe(
        catchError(this.handleError<Token>('getToken'))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** Log a HeroService message with the MessageService */
private log(message: string) {
  console.log(message);
  //this.messageService.add(`HeroService: ${message}`);
}
}