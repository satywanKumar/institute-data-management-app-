import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  constructor() { }
  panelOpenState = false;

  faculty:any = [
    {name:'satywan kumar',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'Aman',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'Akhilesh',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'satywan kumar',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'Pawan',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'Mayank',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},
    {name:'satywan kumar',dob:'10/05/1998',gender:'male',phone:'12345678',salary:123655,subject:'MEAN',joinDate:'10/10/2021',address:'dummy address'},

  ]

  ngOnInit(): void {
  }

}
