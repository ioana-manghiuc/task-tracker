import { Component, OnInit } from '@angular/core';
import { Status } from '../status.enum';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from '../filter/filter.component';
import { RouterOutlet } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [
    TaskGridComponent,
    TaskListComponent,
    NgFor,
    NgIf,
    MatIconModule,
    FilterComponent,
    RouterOutlet
  ],
  providers: [NotificationService], // Add NotificationService to providers
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private notificationService: NotificationService) {} // Inject NotificationService

  notificationMessage = '';
  
  ngOnInit() {
    this.tasks = [];
    this.notificationService.notificationSubject.subscribe
    ( hasNotifications => this.notificationMessage = hasNotifications ?
       "New notifications, please refresh the page" : "");

  }

  isList = true;
  toggleView(viewMode: string) {
    this.isList = viewMode === 'list';
  }

  handleStatusSelected(status: Status) {
    console.log('Selected status:', status);
  }
}
