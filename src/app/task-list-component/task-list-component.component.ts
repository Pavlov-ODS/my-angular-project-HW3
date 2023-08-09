import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl:`task-list-component.component.html`
})
export class TaskListComponent{
  @Input() tasks: { id: number, title: string }[] = [];
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked(task: { id: number, title: string }) {
    this.taskClicked.emit(task);  
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
 