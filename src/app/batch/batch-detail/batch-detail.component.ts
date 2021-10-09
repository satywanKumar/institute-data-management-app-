import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {

  constructor(private router:Router,
              private mainService:MainServiceService,
              private activatedRoute:ActivatedRoute) { }

  searchItem:string = "";
  courseName:string = "";

  batch:any;

  student:any;

  ngOnInit(): void {
    this.courseName = this.activatedRoute.snapshot.params['batchName'];
    this.mainService.getBatchByCourse(this.courseName).subscribe(res=>{
      console.log(res.body);
      this.batch = res.body.batch[0];
    },
    (err)=>{
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
    this.getStudentByBatch();
  }

  update(id)
  {
    console.log(id);
    this.router.navigate(['/dashboard/update-batch',id]);
  }

  // delete batch

  deleteBatch(id)
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: ["cancel","yes i am sure"],
      dangerMode: true,
      className:'swal-title'
    })
    .then((res)=>{
      if(res)
      {
        this.mainService.deleteBatch(id).subscribe(res => {
          console.log(res);
          swal({
            title: "deleted succesfully!",
            // text: "You clicked the button!",
            icon: "success",
          });
          this.router.navigate(['/dashboard/batch-list']);
        },
          (err) => {
            swal({
              title: "something is wrong!",
              // text: "You clicked the button!",
              icon: "error",
            });
          })
      }
    });
   
  }


  getStudentByBatch()
  {
    this.mainService.getStudentByCourse(this.courseName).subscribe(res=>{
      console.log(res.body.student);
      this.student = res.body.student.reverse();
    },
    (err)=>{
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

  // view more 
  viewMore(phone)
  {
    this.router.navigate(['/dashboard/student-detail',phone]);
  }

  delete(id)
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: ["cancel","yes i am sure"],
      dangerMode: true,
      className:'swal-title'
    })
    .then((res)=>{
      if(res)
      {
        this.mainService.deleteStudent(id).subscribe(res => {
          console.log(res);
          this.getStudentByBatch();
          swal({
            title: "deleted succesfully!",
            // text: "You clicked the button!",
            icon: "success",
          });
        },
          (err) => {
            swal({
              title: "something is wrong!",
              // text: "You clicked the button!",
              icon: "error",
            });
          })
      }
    });
   
  }



}
