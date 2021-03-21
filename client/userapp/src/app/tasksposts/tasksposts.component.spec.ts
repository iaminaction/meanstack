import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskspostsComponent } from './tasksposts.component';

describe('TaskspostsComponent', () => {
  let component: TaskspostsComponent;
  let fixture: ComponentFixture<TaskspostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskspostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskspostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
