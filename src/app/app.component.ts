import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  
  <div>
    <h1>Список задач</h1>
    <app-task-list [tasks]="tasks" (taskClicked)="onTaskClicked($event)"></app-task-list>
    <app-create-task (click)="enterName(nameInput)"></app-create-task>
  </div>

  
  `
})
export class AppComponent {
  tasks: { id: number, title: string }[] = [
    { id: 1, title: 'Задача 1' },
    { id: 2, title: 'Задача 2' },
    { id: 3, title: 'Задача 3' }
   
  ];
  addName(name: string) {
    this.tasks.push({
      title: name,
      id: this.tasks.length + 1,
    });
  }
 
  onTaskClicked(task: { id: number, title: string }) {
   
    console.log('Задача выбрана:', task);
  }
}