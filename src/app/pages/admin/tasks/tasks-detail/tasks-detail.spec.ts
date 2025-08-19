import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDetail } from './tasks-detail';

describe('TasksDetail', () => {
  let component: TasksDetail;
  let fixture: ComponentFixture<TasksDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
