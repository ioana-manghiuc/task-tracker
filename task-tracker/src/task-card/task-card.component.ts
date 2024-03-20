import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status.enum';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatFormFieldModule, NgFor],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task | undefined;
  statusOptions: Status[] = Object.values(Status);
}
