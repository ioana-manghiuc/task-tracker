import { Component, Input, Output } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status.enum';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../app/services/task.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatFormFieldModule, NgFor, MatIconModule, 
    EditTaskComponent],
  providers: [TaskService],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task | undefined;
  statusOptions: Status[] = Object.values(Status);
  @Output() taskDeleted: EventEmitter<Task> = new EventEmitter<Task>();

  constructor (private dialog: MatDialog, private taskService: TaskService) {}

  deleteTask(taskToDelete: Task) {
    this.taskService.deleteTask(taskToDelete).subscribe(() => {
      console.log('Task deleted successfully');
      this.taskDeleted.emit(this.task); // emit the event after deletion
    });
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
       data: task,
     });
 
     dialogRef.afterClosed().subscribe((result) => {
       console.log('The dialog was closed');
       this.taskService.editTask(task).subscribe(() =>
       {console.log('Task edited successfully!');} );
     });
   }
 
}
