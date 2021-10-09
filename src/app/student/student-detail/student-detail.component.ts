import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MainServiceService } from 'src/app/main-service.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  displayedColumns:string[] = ['name', 'phone', 'amount', 'date', 'detail'];
  dataSource:any;
  id:string;

  constructor(private mainService:MainServiceService,
              private activatedRoute:ActivatedRoute) { }


  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  student:any;
  phone:any;
  paymentData:any;
  totalPaid:any;

  ngOnInit(): void {
    this.phone = this.activatedRoute.snapshot.params['phone'];
    this.getStudentData();
    this.getTotalPaid();
    this.mainService.paymentHistoryByPhone(this.phone).subscribe(res=>{
      console.log(res.body);
      this.paymentData = res.body.paymentList;
      this.dataSource = new MatTableDataSource(this.paymentData);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
    },
    (err)=>{
      console.log(err.error);
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

  getStudentData()
  {
    this.mainService.getStudentByPhone(this.phone).subscribe(res=>{
      this.student = res.body.student[0];
      console.log(this.student);
      this.phone = this.student.phone;
      console.log(this.student[0]);
    },
    (err)=>{
      console.log(err.error);
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }

  getTotalPaid()
  {
    this.mainService.getTotalCollectionByPhone(this.phone).subscribe(res=>{
      console.log(res.body.total[0].total);
      this.totalPaid = res.body.total[0].total;
    },
    (err)=>{
      console.log(err.error);
      swal({
        title: "something is wrong!",
        // text: "You clicked the button!",
        icon: "error",
      });
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
