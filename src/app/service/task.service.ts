import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private urlBase = `https://danielfabbri.com/taskmanager/tasks.php`;

  constructor(private httpClient: HttpClient) {}
}
