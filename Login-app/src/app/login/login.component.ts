import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  message: string = "";

  constructor(private router: Router) {}

  login() {
    console.log("Email Entered:", this.email);
    console.log("Password Entered:", this.password);

    // Retrieve stored user data from localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (this.email.trim() === user.email && this.password.trim() === user.password) {
        this.message = "Login Successful! Redirecting...";
        console.log("Login Successful!");

        // Store login status
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to home page after 1 second
        setTimeout(() => this.router.navigate(['/home']), 1000);
      } else {
        this.message = "Invalid email or password!";
      }
    } else {
      this.message = "No registered user found! Please register first.";
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
}
