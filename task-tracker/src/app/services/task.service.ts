import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { Status } from '../../status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }
  tasks: Task[] = [
    {
      id: '1',
      title: 'Learn about HTML and SCSS',
      description: 'Learn the basics concepts about HTML and CSS+SCSS',
      status: Status.InProgress,
      assignedTo: 'one',
    },
    {
      id: '2',
      title: 'Create your first Angular app',
      description:
        'Create a new Angular application for managing tasks. You will configure the packages needed for developing the project and then you will define the main components of the application.',
      status: Status.ToDo,
      assignedTo: 'two',
    }
  ];

  getTasks() {  return this.tasks;}

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    return newTask;
  }

  editTask(task: Task): void {
    let i = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[i] = task;
  }
  deleteTask(id: string): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
