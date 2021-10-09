import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  faculty:FormGroup;

  ngOnInit(): void {
    this.faculty = new FormGroup({
      name:new FormControl(),
      gender:new FormControl(),
      phone:new FormControl(),
      subject: new FormControl(),
      dob:new FormControl(),
      joinDate:new FormControl(),
      salary:new FormControl(),
      qualification:new FormControl(),
      add:new FormControl()
    })
  }


  save()
  {
    console.log(this.faculty.value);
  }

}
