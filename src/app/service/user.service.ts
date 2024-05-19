import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlBase = `https://danielfabbri.com/taskmanager/users.php`;

  constructor(private httpClient: HttpClient) {}

  listUser(): Observable<any> {
    return this.httpClient.get(`${this.urlBase}?action=list`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  deleteUser(user: any): Observable<any> {
    return this.httpClient
      .get(`${this.urlBase}?action=delete&id=${user.id}`)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  createUser(user: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=new&nome=${user.name}&email=${user.address}&senha=${user.password}&role=admin`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  updateUser(user: any, userId: any): Observable<any> {
    return this.httpClient
      .get(
        `${this.urlBase}?action=update&nome=${user.name}&email=${user.address}&senha=${user.password}&role=admin&id=${userId}`
      )
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  getUserId(userId: any): Observable<any> {
    return this.httpClient.get(`${this.urlBase}?action=info&id=${userId}`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
