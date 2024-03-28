import { Component, OnInit } from '@angular/core';
import { Status } from '../status.enum';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import { NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FilterComponent } from '../filter/filter.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent, TaskListComponent, NgFor, NgIf, MatIconModule, 
    FilterComponent, RouterOutlet],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})

export class TasksViewComponent implements OnInit{
  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = [ ];
  }

  isList = true;
  toggleView(viewMode: string) {
    this.isList = viewMode === 'list';
  }

  handleStatusSelected(status: Status) {
    console.log('Selected status:', status);
  }
}
