import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private urlBase = `https://danielfabbri.com/taskmanager/projects.php`;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

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

  createTask(task: any, userId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&nome=${task.name}&descricao=${task.Descrição}&criador=${userId}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  updateTask(task: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=update&nome=${task.name}&email=${task.address}&senha=${task.password}&role=admin&id=${task.id}`
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
        `${this.urlBase}?action=new&nome=${task.name}&descricao=${task.Descrição}&criador=${userId}&id=${task.id}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
}
