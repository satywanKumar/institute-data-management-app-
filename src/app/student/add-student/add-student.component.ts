import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private mainService:MainServiceService,
             private router:Router) { }

  student:FormGroup;
  batchList:any;
  imageUrl:any;

  ngOnInit(): void {
    this.getBatch();
    this.student = new FormGroup({
      _id:new FormControl(),
      name:new FormControl(),
      fName:new FormControl(),
      gender:new FormControl(),
      dob:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      add:new FormControl(),
      pin:new FormControl(),
      joinDate:new FormControl(),
      batch:new FormControl(),
      courseFee:new FormControl(),
      photo:new FormControl()
    })
  }

  getBatch()
  {
    this.mainService.getBatch().subscribe(res=>{
      console.log(res.body);
      this.batchList = res.body.batch.reverse();
      // console.log(this.batchList[0].courseName)
    },
    (err)=>{
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

  onImageSelected(event :Event)
  {
    console.log((event.target as HTMLInputElement).files[0]);
    const file = (event.target as HTMLInputElement).files[0];
    this.student.patchValue({photo:file});
    this.student.get('photo').updateValueAndValidity();
    console.log(this.student.value);
    const reader = new FileReader();
    reader.onload = ()=>{
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  

  save()
  {
    console.log(this.student.value);
    this.mainService.addStudent(this.student.value).subscribe(res=>{
      console.log(res.body);
      swal({
        title: "Student added successfuly!",
        // text: "You clicked the button!",
        icon: "success",
      });
      this.router.navigate(['/dashboard/batch-list']);
    },
    (err)=>{
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    }
    )
  }



}
