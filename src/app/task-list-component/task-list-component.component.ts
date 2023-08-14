import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        <app-task-item [task]="task" (taskClicked)="onTaskClicked($event)"></app-task-item>
      </li>
    </ul>
  `
})
export class TaskListComponent{
  @Input() tasks: { id: number, title: string }[] = [];
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked(task: { id: number, title: string }) {
    this.taskClicked.emit(task);  
  }
}
