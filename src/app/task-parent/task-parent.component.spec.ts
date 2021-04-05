import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskParentComponent } from './task-parent.component';

describe('TaskParentComponent', () => {
  let component: TaskParentComponent;
  let fixture: ComponentFixture<TaskParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
