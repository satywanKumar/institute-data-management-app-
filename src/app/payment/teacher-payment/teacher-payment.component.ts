import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-payment',
  templateUrl: './teacher-payment.component.html',
  styleUrls: ['./teacher-payment.component.css']
})
export class TeacherPaymentComponent implements OnInit {

  constructor() { }

  faculty:FormGroup

  ngOnInit(): void {
    this.faculty = new FormGroup({
      name:new FormControl(),
      phone:new FormControl(),
      detail:new FormControl(),
      amount:new FormControl()
    })
  }

  pay()
  {
    console.log(this.faculty.value)
  }

}
