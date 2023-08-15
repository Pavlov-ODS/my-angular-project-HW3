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

  onTaskClicked(task: { id: number, title: string }) {
    this.taskClicked.emit(task);
  }

  removeTask(taskId: number) {
    this.taskRemoved.emit(taskId);
  }
}
