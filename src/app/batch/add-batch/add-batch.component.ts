import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  batch:FormGroup;
  batchId:string;

  ngOnInit(): void {
    this.batchId = this.activatedRoute.snapshot.params['id'];
    console.log('batch id : ',this.batchId);
    this.batch = new FormGroup({
      _id:new FormControl(),
      courseName:new FormControl(),
      discription:new FormControl(),
      startingDate:new FormControl(),
      duration:new FormControl(),
      time:new FormControl(),
      location:new FormControl(),
      instructor:new FormControl()
    })

    if(this.batchId != undefined)
    {
      this.mainService.getBatchById(this.batchId).subscribe(res=>{
        console.log(res.body.batch);
        this.batch.setValue(res.body.batch);
      })
    }

  }

  save()
  {
    // console.log(this.batch.value,this.batch.valid);
    if(this.batchId == undefined)
    {
      this.mainService.addBatch(this.batch.value).subscribe(res=>{
        console.log(res.body);
        swal({
          title: "Batch added successfuly!",
          // text: "You clicked the button!",
          icon: "success",
        });
        this.router.navigate(['/dashboard/batch-list'])
  
      },
      (err)=>{
        swal({
          title: "something is wrong!",
          // text: "You clicked the button!",
          icon: "error",
        });
      })
    }

    else
    {
      this.mainService.UpdateBatch(this.batchId,this.batch.value).subscribe(res=>{
        console.log(res.body);
        swal({
          title: "Batch updated successfuly!",
          // text: "You clicked the button!",
          icon: "success",
        });
        this.router.navigate(['/dashboard/batch-list'])
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

}
