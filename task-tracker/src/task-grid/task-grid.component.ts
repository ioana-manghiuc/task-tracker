import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status.enum';
import { TaskCardComponent } from '../task-card/task-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { TaskService } from '../app/services/task.service';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [TaskCardComponent, MatCardModule, MatButtonModule, MatFormFieldModule, 
    MatSelectModule, NgFor, NgIf],
  providers: [TaskService],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss' 
})
export class TaskGridComponent implements OnInit{
  tasks: Task[] = [];
   constructor(
    private taskService: TaskService,
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onDeleteTask(deletedTask: Task) {
    this.tasks = this.tasks.filter(task => task.id !== deletedTask.id);
  }
}
