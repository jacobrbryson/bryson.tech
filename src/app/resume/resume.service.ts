import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Resume } from './resume';
import { ToolType } from './tooltype';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  ResumeUUID = 'ae19899a-58e3-11ea-b1fa-983956030c36';//Move to config
  private baseURL = 'http://localhost:3000'
  private  resumeEndPoint = '/resume';
  private toolTypesEndPoint = '/tool/types'

  constructor(private http: HttpClient) { }

  getResume (): Observable<Resume> {
    return this.http.get<Resume>(this.baseURL + this.resumeEndPoint + "/" + this.ResumeUUID)
      .pipe(
        catchError(this.handleError<Resume>('getResume'))
      );
  }

  getToolTypes (): Observable<ToolType[]> {
    return this.http.get<ToolType[]>(this.baseURL + this.resumeEndPoint + "/" + this.toolTypesEndPoint + "/" + this.ResumeUUID)
      .pipe(
        catchError(this.handleError<ToolType[]>('getToolTypes'))
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