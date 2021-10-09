import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddBatchComponent } from './batch/add-batch/add-batch.component';
import { BatchDetailComponent } from './batch/batch-detail/batch-detail.component';
import { BatchListComponent } from './batch/batch-list/batch-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentHistoryComponent } from './payment/payment-history/payment-history.component';
import { TeacherPaymentHistoryComponent } from './payment/teacher-payment-history/teacher-payment-history.component';
import { TeacherPaymentComponent } from './payment/teacher-payment/teacher-payment.component';
import { SignupComponent } from './signup/signup.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'batch-list',component:BatchListComponent},
    {path:'add-batch',component:AddBatchComponent},
    {path:'update-batch/:id',component:AddBatchComponent},
    {path:'batch/:batchName',component:BatchDetailComponent},
    {path:'student-detail/:phone',component:StudentDetailComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'edit-student/:id',component:AddStudentComponent},
    {path:'pay-fee',component:AddPaymentComponent},
    {path:'pay-salary',component:TeacherPaymentComponent},
    {path:'payment-history/:role',component:PaymentHistoryComponent},
    {path:'faculty',component:FacultyListComponent},
    {path:'add-faculty',component:AddFacultyComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
