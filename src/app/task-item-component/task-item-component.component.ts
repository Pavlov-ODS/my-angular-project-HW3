import { style } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item-component.component.html'
  
})
export class TaskItemComponent {
  @Input() task: { id: number, title: string, closed: boolean } = { id: 0, title: '', closed: false };
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked() {
    this.taskClicked.emit(this.task);
  }

  onCheckboxChange(event: Event, task: { id: number, title: string, closed: boolean }) {
    task.closed = (event.target as HTMLInputElement).checked;
  }

  removeTask(taskId: number) {
   
  }
}
