import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  constructor(private router:Router,
              private mainService:MainServiceService) { }

  batch:any;
  isLoading:boolean = false;

  ngOnInit(): void {
    this.getBatch();
  }

  detail(batchName)
  {
    this.router.navigate(['/dashboard/batch',batchName])
  }

  getBatch()
  {
    this.isLoading = true;
    this.mainService.getBatch().subscribe(res=>{
      this.isLoading = false;
      console.log(res.body);
      this.batch = res.body.batch.reverse();
      //console.log(this.batch[0].courseName)
    },
    (err)=>{
      this.isLoading = false;
      console.log(err.error);
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

}
