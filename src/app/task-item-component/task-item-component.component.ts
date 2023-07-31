import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
    <div (click)="onTaskClicked()" >
      {{ task.title }}
    </div>
  `
})
export class TaskItemComponent {
  @Input() task: { id: number, title: string } = { id: 0, title: '' };
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked() {
    this.taskClicked.emit(this.task);
  }
}
