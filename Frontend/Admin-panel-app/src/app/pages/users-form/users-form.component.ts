import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css',
})
export class UsersFormComponent implements OnInit {

  formData: any = {
    username: '',
    email: '',
    password: '',
    role: 'User',
    created_by : null
  };

  loggedInRole : String = '';
  isUpdatedMode : boolean = false;
  id !: number;
  isDataFetch:boolean = false


  constructor(private userService: UserService, 
    public router: Router, private route : ActivatedRoute) {
      
    }

  ngOnInit(): void {

    let loggedInUser : any = null;
    const superAdminData = sessionStorage.getItem('Superadmin-data');
    const adminData = sessionStorage.getItem('Admin-data');

    if(superAdminData){
      loggedInUser = JSON.parse(sessionStorage.getItem('Superadmin-data') || '{}');
      this.loggedInRole = 'Superadmin';
    }else if(adminData){
      loggedInUser = JSON.parse(adminData);
      this.loggedInRole = 'Admin';
    }else{
      console.warn('No Valid Session Found!');
    }

    this.route.params.subscribe(params => {
      if(params['id']){
        this.isUpdatedMode = true;
        this.id = +params['id'];
        this.getUserById(this.id);
      }else{
        this.isUpdatedMode = false;
        this.formData = {
          username :'',
          email : '',
          password : '',
          role : 'User',
          created_by : loggedInUser?.id || null
        }
      }
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((res: any) => {
      console.log('API response:', res);
  
      if (res) {
        this.isDataFetch = true

        this.formData.username = res.username;
        this.formData.email = res.email;
        this.formData.password = res.password;
        this.formData.role = res.role;
        this.formData.created_by = res.created_by;
      }
    });
  }
  

  onSubmit() {
    if (this.isUpdatedMode) {
      this.userService.updateUser(this.id, this.formData).subscribe(res => {
        alert('User/Admin Updated Successfully!');
        this.router.navigate(['/app-dashboard']);
      });
    } else {
      this.userService.addUser(this.formData).subscribe(res => {
        alert('User/Admin Added Successfully!');
        this.router.navigate(['/app-dashboard']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/app-dashboard']);
  }
  

}
