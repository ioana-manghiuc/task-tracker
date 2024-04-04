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
  taskAssignTo: string;

  constructor(private router: Router, private taskService: TaskService ) {}

  addTask() {
    console.log('Task Name:', this.taskName);
    console.log('Task Description:', this.taskDescription);
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
    const newTask =  <Task>{ 
    // id: '1',
      name: this.taskName,
      description: this.taskDescription,
      status: Status.ToDo,
      assignedTo: this.taskAssignTo,
    }
    this.taskService.addTask(newTask)
      .subscribe(task => {
        console.log('Task added successfully:', task);
        this.router.navigate(['/']);
      });

  }

  cancel() {
    this.router.navigate(['/']);
  }
}
