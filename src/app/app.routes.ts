import { Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerEnquiryComponent } from './customer-enquiry/customer-enquiry.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'owner-login', component: OwnerLoginComponent },
  { path: 'owner-signup', component: OwnerSignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vehicle-management', component: VehicleManagementComponent },
      { path: 'customer-enquiry', component: CustomerEnquiryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'user-login' }
];

