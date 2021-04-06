import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() listItem: Task | null = null;
  @Input() i: number = 0;
  @Input() sectionTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
