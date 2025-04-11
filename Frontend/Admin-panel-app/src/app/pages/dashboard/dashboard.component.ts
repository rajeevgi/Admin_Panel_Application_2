import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  user: User = new User();

  userList: any[] = [];

  users: any;
  admins: any;

  totalUsers: number = 0;
  totalAdmins: number = 0;

  showAdminTable: boolean = false;
  showUserTable: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsersAndAdmins();
  }

  getAllUsersAndAdmins() {
    this.userService.getAllUsers().subscribe((res: any) => {
      if (res && res.result) {
        this.userList = res.result;

        this.admins = this.userList.filter(
          (user: any) => user.role === 'Admin'
        );
        this.users = this.userList.filter(
          (admin: any) => admin.role === 'User'
        );

        this.totalAdmins = this.admins.length;
        this.totalUsers = this.users.length;
      }
    });
  }

  showUserTableOnly() {
    this.showUserTable = !this.showUserTable;
    this.showAdminTable = false;
  }

  showAdminTableOnly() {
    this.showUserTable = false;
    this.showAdminTable = !this.showAdminTable;
  }

  onUpdateUser(id: number) {
    this.router.navigate(['/app-users-form', id]);
  }

  onUpdateAdmin(id: number) {
    this.router.navigate(['/app-users-form', id]);
  }

  onDeleteUser(id: number) {
    if (confirm('Are you sure want to delete the user?')) {
      this.userService.deleteUser(id).subscribe((res: any) => {
        alert('User Deleted Successfully...');
        this.getAllUsersAndAdmins();
      });
    }
  }

  onDeleteAdmin(id: number) {
    if (confirm('Are you sure want to delete the Admin?')) {
      this.userService.deleteUser(id).subscribe((res: any) => {
        alert('Admin Deleted Successfully...');
        this.getAllUsersAndAdmins();
      });
    }
  }

  selectedProfile: any;

  getProfile(profile: any) {
    this.selectedProfile = profile;
  }
}
