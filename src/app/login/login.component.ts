import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  invalidLogin: boolean = false;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  login(): void {
    
    if (this.username == 'dhiraj@gmail.com' && this.password == 'password') {
      this.router.navigate(['list-user']);
    } else {
      this.invalidLogin = true;
    }
  }
}
