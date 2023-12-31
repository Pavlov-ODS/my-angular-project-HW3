import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
