import { Component, OnInit } from '@angular/core';
import { Status } from '../status.enum';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})

export class TasksViewComponent implements OnInit{
  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = [
      { id: '1', title: 'Create your first Angular app', description: 'Create a new Angular application for managing tasks.', status: Status.ToDo },
      { id: '2', title: 'Learn about HTML and SCSS', description: 'Learn about the basic concepts about HTML and CSS+SCSS', status: Status.InProgress },
      { id: '3', title: 'Prepare Angular and .Net Core prerequisites', description: 'Create a document that contains all the prerequisites needed for the BRTA course', status: Status.Done }
    ];
  }
}
