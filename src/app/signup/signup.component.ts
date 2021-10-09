import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router:Router) { }
  user:FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      userName: new FormControl(),
      password:new FormControl(),
      firstName: new FormControl(),
      lastName:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      userType:new FormControl()
    })
  }

  signup()
  {
    this.mainService.signup(this.user.value).subscribe(res=>{
      console.log(res.body);
      swal({
        title: "account created successfuly!",
        // text: "You clicked the button!",
        icon: "success",
      });
      this.router.navigate(['/login']);
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
