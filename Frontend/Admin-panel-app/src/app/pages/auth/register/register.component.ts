import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { User } from '../../../model/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  User : User = new User();

  constructor(private authService : AuthService, private router : Router){}

  onRegister(){
    if (this.User.role === 'Admin'){
      this.authService.register(this.User).subscribe(( res : any) => {
        alert('Admin Registered Successfully...');
        this.router.navigate(["/app-login"]);
      });
    } else if(this.User.role === 'User'){
      this.authService.register(this.User).subscribe(( res : any) => {
        alert('User Registered Successfully...');
        this.router.navigate(["/app-login"]);
      });
    }else {
      alert('Something went wrong!');
      this.router.navigate(["/app-register"])
    }
  }
}
