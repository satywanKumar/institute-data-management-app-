import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';


export interface Payment {
  _id: string;
  name: string;
  phone: string;
  amount: Number;
  detail: string,
  date: Date,
  month: String
}

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  displayedColumns:string[] = ['name', 'phone', 'amount', 'date', 'detail'];
  dataSource:any;
  role:any;

  constructor(private activatedRoute:ActivatedRoute,
              private mainService:MainServiceService) { }

  paymentData:any;
  @ViewChild(MatPaginator) paginator:MatPaginator;


  ngOnInit(): void {
    this.role = this.activatedRoute.snapshot.params['role'];
    this.mainService.paymentHistory().subscribe(res=>{
      this.paymentData = res.body.paymentList.reverse();
      console.log(this.paymentData);
      this.dataSource = new MatTableDataSource(this.paymentData);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
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
