import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodohomeComponent } from './todohome.component';

describe('TodohomeComponent', () => {
  let component: TodohomeComponent;
  let fixture: ComponentFixture<TodohomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodohomeComponent]
    });
    fixture = TestBed.createComponent(TodohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
