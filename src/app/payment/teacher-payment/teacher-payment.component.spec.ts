import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPaymentComponent } from './teacher-payment.component';

describe('TeacherPaymentComponent', () => {
  let component: TeacherPaymentComponent;
  let fixture: ComponentFixture<TeacherPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
