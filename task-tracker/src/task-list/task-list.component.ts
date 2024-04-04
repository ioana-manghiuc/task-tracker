import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import {MatIconModule} from '@angular/material/icon';
import { Status } from '../status.enum';
import { TaskService } from '../app/services/task.service';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent, MatIconModule, EditTaskComponent],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {this.tasks = tasks
      this.filteredTasks = tasks;
    });
  }

  handleStatusSelected(status: Status) {
    this.filteredTasks = this.tasks.filter(task => task.status === status);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe();
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
       data: task,
     });
 
     dialogRef.afterClosed().subscribe((result) => {
       console.log('The dialog was closed');
       this.taskService.editTask(task);
     });
   }

}
