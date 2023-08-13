import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponent {
  @Input() tasks: { id: number, title: string, closed: boolean }[] = [];
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();
  @Output() taskRemoved: EventEmitter<number> = new EventEmitter();

  onCheckboxChange(event: any, task: { id: number, title: string, closed: boolean }) {
    task.closed = event.target.checked;
  }

  removeTask(index: number) {
    this.taskRemoved.emit(index);
  }
}
