import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Input() tasks: { id: number, title: string }[] = [];
  @Output() outEnterName = new EventEmitter<string>();


  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
    nameInput.value = '';
  }
}
