import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BatchListComponent } from './batch/batch-list/batch-list.component';
import { AddBatchComponent } from './batch/add-batch/add-batch.component';
import { BatchDetailComponent } from './batch/batch-detail/batch-detail.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentFilterPipe } from './student-filter.pipe';
import { AddStudentComponent } from './student/add-student/add-student.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentHistoryComponent } from './payment/payment-history/payment-history.component';
import { TeacherPaymentComponent } from './payment/teacher-payment/teacher-payment.component';
import { TeacherPaymentHistoryComponent } from './payment/teacher-payment-history/teacher-payment-history.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MainServiceService } from './main-service.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    BatchListComponent,
    AddBatchComponent,
    BatchDetailComponent,
    StudentDetailComponent,
    StudentFilterPipe,
    AddStudentComponent,
    AddPaymentComponent,
    PaymentHistoryComponent,
    TeacherPaymentComponent,
    TeacherPaymentHistoryComponent,
    AddFacultyComponent,
    FacultyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [MainServiceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
