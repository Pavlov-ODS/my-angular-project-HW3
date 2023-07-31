import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Список задач</h1>
    <app-task-list [tasks]="tasks" (taskClicked)="onTaskClicked($event)"></app-task-list>
  `
})
export class AppComponent {
  tasks: { id: number, title: string }[] = [
    { id: 1, title: 'Задача 1' },
    { id: 2, title: 'Задача 2' },
    { id: 3, title: 'Задача 3' }
   
  ];

  onTaskClicked(task: { id: number, title: string }) {
   
    console.log('Задача выбрана:', task);
  }
}

