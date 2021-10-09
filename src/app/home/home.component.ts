import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MainServiceService } from '../main-service.service';
Chart.register(...registerables);
import swal from 'sweetalert';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private mainService:MainServiceService) { }
  piChart:any = [];

  studentList:any;

  totalBatch:any;
  totalStudent:any;
  totalMale:any;
  totalFemale:any;
  ngOnInit(): void {
    this.getTotalBatch();
    this.getTotalStudent();
    this.getRecentStudent();
    this.countMale();
    this.countFemale();
    setTimeout(()=>{this.createChart()},1000)
  }

  getTotalBatch()
  {
    this.mainService.getTotalBatch().subscribe(res=>{
      console.log(res.body.total);
      this.totalBatch = res.body.total;
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

  getTotalStudent()
  {
    this.mainService.getTotalStudent().subscribe(res=>{
      console.log(res.body.total);
      this.totalStudent = res.body.total;
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

  getRecentStudent()
  {
    this.mainService.recentStudent().subscribe(res=>{
      console.log(res.body.student);
      this.studentList = res.body.student;
    })
  }

  countMale()
  {
    this.mainService.countByGender('male').subscribe(res=>{
      console.log(res.body);
      this.countMale = res.body.total;
    })
  }

  countFemale()
  {
    this.mainService.countByGender('female').subscribe(res=>{
      console.log(res.body);
      this.countFemale = res.body.total;
    })
  }

  createChart()
  {

    this.piChart = new Chart('pieChart', {
      type: 'pie',
        data: {
          datasets: [{
            data: [this.countMale, this.countFemale],
            backgroundColor: ['teal','palevioletred'],
            label: 'Dataset 1'
          }],
          labels: [
            'Male',
            'Female'
          ]
        },
        options: {
          responsive: true
        }
  });
  }

}
