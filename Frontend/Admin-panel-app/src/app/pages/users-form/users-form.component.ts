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
  };

  isUpdatedMode : boolean = false;
  id !: number;

  constructor(private userService: UserService, public router: Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
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
          role : 'User'
        }
      }
    });
  }

  getUserById(id : number){
    this.userService.getUserById(id).subscribe((res: any) => {
      if(res && res.result){
        this.formData = {
          username: res.result.username,
          email: res.result.email,
          password: res.result.password,
          role: res.result.role
        };
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
