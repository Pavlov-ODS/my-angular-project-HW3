import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Output() outEnterName = new EventEmitter<string>();
  @Output() outDeleteClosedTasks = new EventEmitter<void>();

  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
    nameInput.value = '';
  }

  deleteAllClosedTasks() {
    this.outDeleteClosedTasks.emit();
  }
}
