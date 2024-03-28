import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../app/services/task.service';
import { Task } from '../task';
import { Status } from '../status.enum';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  providers: [TaskService],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskName: string;
  taskDescription: string;

  constructor(private router: Router, private taskService: TaskService ) {}

  addTask() {
    console.log('Task Name:', this.taskName);
    console.log('Task Description:', this.taskDescription);
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
    this.router.navigate(['/']);
    const task = { 
      id: '1',
      title: this.taskName,
      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: 'someone',
    }
    this.taskService.addTask(task);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
