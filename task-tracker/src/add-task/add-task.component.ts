import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskName: string;
  taskDescription: string;

  constructor(private router: Router) {}

  addTask() {
    console.log('Task Name:', this.taskName);
    console.log('Task Description:', this.taskDescription);
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
