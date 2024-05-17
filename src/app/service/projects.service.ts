import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private urlBase = `https://danielfabbri.com/taskmanager/projects.php`;

  constructor(private httpClient: HttpClient) {}

  listProject(): Observable<any> {
    return this.httpClient.get(`${this.urlBase}?action=list`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  deleteProject(project: any): Observable<any> {
    return this.httpClient
      .get(`${this.urlBase}?action=delete&id=${project.id}`)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  createProject(project: any, userId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&nome=${project.name}&descricao=${project.description}&criador=${userId}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  updateProject(project: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=update&nome=${project.name}&email=${project.address}&senha=${project.password}&role=admin&id=${project.id}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  getProjectId(project: any, userId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&nome=${project.name}&descricao=${project.description}&criador=${userId}&id=${project.id}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
}
