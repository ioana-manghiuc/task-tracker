import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import {MatIconModule} from '@angular/material/icon';
import { Status } from '../status.enum';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent, MatIconModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredTasks = [...this.tasks];
  }

  handleStatusSelected(status: Status) {
    this.filteredTasks = this.tasks.filter(task => task.status === status);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: Task): void {
    console.log('Editing task:', task);
    // logic
  }

}
