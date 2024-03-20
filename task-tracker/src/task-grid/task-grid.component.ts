import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status.enum';
import { TaskCardComponent } from '../task-card/task-card.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [TaskCardComponent, MatCardModule, MatButtonModule, MatFormFieldModule, 
    MatSelectModule, NgFor, NgIf],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {
   @Input() tasks: Task[] = [];
  //  statusOptions: Status[] = Object.values(Status);
}
