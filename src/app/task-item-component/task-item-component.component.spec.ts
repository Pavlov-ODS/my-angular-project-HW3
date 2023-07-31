import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponentComponent } from './task-item-component.component';

describe('TaskItemComponentComponent', () => {
  let component: TaskItemComponentComponent;
  let fixture: ComponentFixture<TaskItemComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponentComponent]
    });
    fixture = TestBed.createComponent(TaskItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
