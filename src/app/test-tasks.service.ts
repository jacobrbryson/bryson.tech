import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TestTasksService {
  private Url = 'http://localhost:3000/tasks';  // URL to web api
  constructor(private http: HttpClient) { }
  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.Url)
  }
}