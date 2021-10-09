import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router:Router) { }

  student:FormGroup;

  ngOnInit(): void {
    this.student = new FormGroup({
      name:new FormControl(),
      phone:new FormControl(),
      detail:new FormControl(),
      amount:new FormControl()
    })
  }

  pay()
  {
    this.mainService.payFee(this.student.value).subscribe(res=>{
      console.log(res);
      swal({
        title: "paid successfully...!",
        // text: "You clicked the button!",
        icon: "success",
      });
      this.router.navigate(['/dashboard/payment-history/student']);

    },
    (err)=>{
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

}
