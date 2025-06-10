import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
    imports: [
    // ...existing modules...
    FormsModule
  ],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  onLogin(form: any) {
    // You can access form values here
    // Example: console.log(form.value);
    alert('Login clicked! (Add your logic here)');
  }
}
