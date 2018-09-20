import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = "admin";
  password = "admin";
  userDoesNotExistError: boolean;

  constructor(private us: UserService, private router: Router) { }

  logUserIn() {
    this.us.user = this.us.users.find((user) => {
      return user.username === this.username && user.password === this.password;
    });
    if (this.us.user['username']) {
      this.router.navigate(['store']);
    }
  }
  ngOnInit() {
  }

}
