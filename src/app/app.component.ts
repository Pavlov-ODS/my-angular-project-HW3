import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  tasks: { closed: boolean, id: number, title: string }[] = [
    { id: 1, title: 'Задача 1', closed: false },
    { id: 2, title: 'Задача 2', closed: false },
    { id: 3, title: 'Задача 3', closed: false },
  ];

  addName(name: string) {
    if (name.trim() === "") {
      return;
    }
    this.tasks.push({
      title: name,
      id: this.tasks.length + 1,
      closed: false
    });
  }

  onTaskClicked(task: { id: number, title: string }) {
    console.log('Задача выбрана:', task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  deleteClosedTasks() {
  this.tasks = this.tasks.filter(task => !task.closed);
}

}
