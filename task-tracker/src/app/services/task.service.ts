import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { Status } from '../../status.enum';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  constructor(private httpClient: HttpClient) { }

  baseUrl="http://localhost:5099/Task";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getTasks():Observable<Task[]> {  return this.httpClient.get<Task[]>(this.baseUrl);}

  addTask(newTask: Task) {
    return this.httpClient.post<Task>(this.baseUrl, newTask, 
      { headers: this.headers, responseType: 'text' as 'json' });
  }

  editTask(task: Task) {
    return this.httpClient.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }
    
  deleteTask(task: Task) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${task.id}`,
    { headers: this.headers, responseType: 'text' as 'json' });
}
}
