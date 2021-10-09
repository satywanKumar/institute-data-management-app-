import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router:Router) { }

  user:FormGroup;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.user = new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  login()
  {
    this.isLoading = true;
    this.mainService.login(this.user.value).subscribe(res=>{
      this.isLoading = false;
      console.log(res.body);
      this.router.navigate(['/dashboard']);
      localStorage.setItem('userName',res.body.userName);
      localStorage.setItem('token',res.body.token);
      localStorage.setItem('firstName',res.body.firstName);
      localStorage.setItem('email',res.body.email);
    },
    (err)=>{
      console.log(err.error.msg);
      this.isLoading = false;
      swal({
        title: err.error.msg,
        // text: "You clicked the button!",
        icon: "error",
      });
    }
    )
  }

}
