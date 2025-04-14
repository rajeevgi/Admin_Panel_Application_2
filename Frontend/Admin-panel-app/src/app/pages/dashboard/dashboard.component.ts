import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';

declare var bootstrap: any;


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
    const superAdminData = sessionStorage.getItem('Superadmin-data');
    const adminData = sessionStorage.getItem('Admin-data');

    if (superAdminData) {
      const data = JSON.parse(superAdminData);
      this.loggedInUser = data?.id || 0;
    } else if (adminData) {
      const data = JSON.parse(adminData);
      this.loggedInUser = data?.id || 0;
    }

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

  // Update User Modal
  loggedInUser: number = 0;

  modalRole: String = '';
  filteredUsers: any[] = [];
  filteredAdmins: any[] = [];

  // openUpdateModal(role: String) {
  //   const createdByKey = this.loggedInUser;

  //   if (role === 'User') {
  //     this.filteredUsers = this.users.filter(
  //       (u: any) => u.createdBy === createdByKey
  //     );
  //   } else if (role === 'Admin') {
  //     this.filteredAdmins = this.admins.filter(
  //       (a: any) => a.createdBy === createdByKey
  //     );
  //   }
  // }

  openUpdateModal() {
    this.filteredUsers = this.users.filter(
      (u: any) => u.created_by === this.loggedInUser
    );
    this.filteredAdmins = this.admins.filter(
      (a: any) => a.created_by === this.loggedInUser
    );
  }

  @ViewChild('updateModal') updateModalElement!: ElementRef;

  closeUpdateModal() {
    const modal = bootstrap.Modal.getInstance(
      this.updateModalElement.nativeElement
    );
    if (this.updateModalElement) {
      modal.hide();
    }
  }

  goToUpdateForm(id: number) {
    this.router.navigate(['/app-users-form', id]);
  }
}
