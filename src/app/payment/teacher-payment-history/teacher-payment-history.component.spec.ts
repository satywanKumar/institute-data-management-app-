import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPaymentHistoryComponent } from './teacher-payment-history.component';

describe('TeacherPaymentHistoryComponent', () => {
  let component: TeacherPaymentHistoryComponent;
  let fixture: ComponentFixture<TeacherPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
