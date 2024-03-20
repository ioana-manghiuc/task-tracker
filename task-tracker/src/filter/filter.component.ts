import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Status } from '../status.enum';
import { NgFor,NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent implements OnInit {
  statuses = Object.values(Status);
  @Output() statusSelected: EventEmitter<Status> = new EventEmitter<Status>();

  constructor() { }

  ngOnInit(): void {
  }

  selectStatus(status: Status): void {
    this.statusSelected.emit(status);
  }
}
