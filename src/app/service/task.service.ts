import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private urlBase = `https://danielfabbri.com/taskmanager/tasks.php`;

  constructor(private httpClient: HttpClient) {}
  listTask(): Observable<any> {
    return this.httpClient.get(`${this.urlBase}?action=list`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  deleteTask(task: any): Observable<any> {
    return this.httpClient
      .get(`${this.urlBase}?action=delete&id=${task.id}`)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  createTask(task: any, userId: any, projectId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&titulo=${task.title}&status=${task.status}&descricao=${task.description}&responsavel=${userId}&projeto=${projectId}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
  updatetTask(task: any, userId: any, projectId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=update&titulo=${task.title}&descricao=${task.description}&status=${task.status}&responsavel=${userId}&projeto=${projectId}&id=${task.id}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  getTaskId(task: any, userId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&nome=${task.name}&descricao=${task.description}&criador=${userId}&id=${task.id}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
}
