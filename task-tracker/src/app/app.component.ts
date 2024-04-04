import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TasksViewComponent} from '../tasks-view/tasks-view.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, 
    TasksViewComponent, MatCardModule, FormsModule, RouterLink, HttpClientModule],
})
export class AppComponent {
  title = 'task-tracker';
}
export class ToolbarBasicExample {}