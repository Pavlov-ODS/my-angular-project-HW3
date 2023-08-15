import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list-component/task-list-component.component';
import { TaskItemComponent } from './task-item-component/task-item-component.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
