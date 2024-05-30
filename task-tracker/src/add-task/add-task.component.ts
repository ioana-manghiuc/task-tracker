import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../app/services/task.service';
import { Task } from '../task';
import { Status } from '../status.enum';
import { NotificationService } from '../notification.service';

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

  constructor(private router: Router, private taskService: TaskService, 
              private notificationService: NotificationService) {}

  addTask() {
    console.log('Task Name:', this.taskName);
    console.log('Task Description:', this.taskDescription);
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
      const newTask =  <Task>{ 
        name: this.taskName,
        description: this.taskDescription,
        status: Status.ToDo,
        assignedTo: this.taskAssignTo,
      }
      this.taskService.addTask(newTask)
        .subscribe(task => {
          this.notificationService.sendMessage("BroadcastMessage", [task])
          // Optionally, reset the form fields after submission
          this.resetForm();
          this.router.navigate(['/']);
        });
      }
      
    resetForm() {
      this.taskName = '';
      this.taskDescription = '';
      this.taskAssignTo = '';
    }

    cancel() {
      this.router.navigate(['/']);
    }

  }
