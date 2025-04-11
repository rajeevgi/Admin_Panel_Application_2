import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    if (sessionStorage.getItem('Superadmin-data')) {
      this.role = 'Superadmin';
    } else if (sessionStorage.getItem('Admin-data')) {
      this.role = 'Admin';
    } else if (sessionStorage.getItem('User-data')) {
      this.role = 'User';
    } else {
      this.role = null;
    }
  }

  logout() {
    if (this.role === 'User') {
      sessionStorage.getItem('User-data');
      sessionStorage.removeItem('User-data');
      sessionStorage.clear();
      this.router.navigateByUrl('/app-login');
    } else if (this.role === 'Admin') {
      sessionStorage.getItem('Admin-data');
      sessionStorage.removeItem('Admin-data');
      sessionStorage.clear();
      this.router.navigateByUrl('/app-login');
    } else if (this.role === 'Superadmin') {
      sessionStorage.getItem('Superadmin-data');
      sessionStorage.removeItem('Superadmin-data');
      sessionStorage.clear();
      this.router.navigateByUrl('/app-login');
    } else {
      alert('Invalid Role!');
    }
  }
}
