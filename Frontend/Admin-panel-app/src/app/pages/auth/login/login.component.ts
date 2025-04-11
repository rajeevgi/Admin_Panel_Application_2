import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { User } from '../../../model/user';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterModule, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user).subscribe((res: any) => {

      if (res && res.user && res.user.role) {
        alert(`${res.user.role} Logged in Successfully...`);

        // Save role-wise session
        sessionStorage.setItem(
          `${res.user.role}-data`,
          JSON.stringify(res.user)
        );

        // Navigate to common dashboard
        this.router.navigateByUrl('/app-dashboard');
      } else {
        alert('Invalid Credentials!');
      }
    });
  }
}
