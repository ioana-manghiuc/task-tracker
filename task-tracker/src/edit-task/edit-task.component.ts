import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { Task } from '../task';
import{MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogClose,
MatDialogContent, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogActions, MatDialogClose,
    MatDialogContent, MatDialogTitle],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  constructor(public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {}

    save():void{
        this.dialogRef.close();
    }

    cancel(): void{
        this.dialogRef.close();
    }
}
