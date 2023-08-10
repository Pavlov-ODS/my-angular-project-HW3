import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: `task-list-component.component.html`,
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponent{
  @Input() tasks: {
closed: any; id: number, title: string 
}[] = [];
  @Output() taskClicked: EventEmitter<{ id: number, title: string }> = new EventEmitter();

  onTaskClicked(task: { id: number, title: string }) {
    
    this.taskClicked.emit(task);  
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
 