import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  registeredCarsCount = 12; // Replace with real data
  availableCarsCount = 7;   // Replace with real data
  customerEnquiryCount = 5; // Replace with real data

  constructor(private router: Router) {}

  goToVehicleManagement() {
    this.router.navigate(['/vehicle-management']);
  }

  goToCustomerEnquiry() {
    this.router.navigate(['/customer-enquiry']);
  }
}
