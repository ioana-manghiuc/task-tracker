import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import {MatIconModule} from '@angular/material/icon';
import { Status } from '../status.enum';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent, MatIconModule],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
  ) {}


  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = [...this.taskService.tasks];
  }

  handleStatusSelected(status: Status) {
    this.filteredTasks = this.taskService.tasks.filter(task => task.status === status);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id);
  }

  editTask(task: Task): void {
    console.log('Editing task:', task);
    // logic
  }

}
