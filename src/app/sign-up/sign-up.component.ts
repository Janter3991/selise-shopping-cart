import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    newUsername:string;
    newPassword:string;
    cPassword:string;
    usernameError:boolean;
    passwordError:boolean;
    passwordConfirmError:boolean;

  constructor(private us:UserService, private router: Router ) {}

  addNewUser(){
    this.us.userExist = this.us.users.find((user) => {
      return user.username === this.newUsername;
    });
    if (!this.us.userExist && this.newPassword.length>=6 && this.newPassword===this.cPassword) {
        this.us.db.list('loginInfo').push({
        username:this.newUsername,
        password:this.newPassword
      });
        this.router.navigate(['mystore']);
        this.us.user = {
          username:this.newUsername,
          password:this.newPassword
        };
      }
    else if (this.us.userExist){
        this.usernameError=true;
        setTimeout(()=>{this.usernameError=false;},5000);
      }
    else if (this.newPassword.length<6){
        this.passwordError=true;
        setTimeout(()=>{this.passwordError=false;},5000);
      }
    else if (this.newPassword!==this.cPassword){
        this.passwordConfirmError=true;
        setTimeout(()=>{this.passwordConfirmError=false;},5000);
      }
  }
  ngOnInit() {
  }
}
