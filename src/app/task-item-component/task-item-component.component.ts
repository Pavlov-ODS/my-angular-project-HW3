import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: `task-item-component.component.html`
})
export class TaskItemComponent {
  @Input() task: { id: number, title: string } = { id: 0, title: '' };
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked() {
    this.taskClicked.emit(this.task);
  }
}
