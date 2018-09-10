import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../service/user.service";
import { User } from "../model/user";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  firstName: string;
  lastName: string;
  email: string;
  invalidData: boolean = false;

  constructor(private router: Router, private userService: UserService) { 
  }

  create(): void {
    let user = new User();
    user.firstName = this.firstName.trim();
    user.lastName = this.lastName.trim();
    user.email = this.email.trim();

    if (!user.firstName || !user.lastName || !user.email) {
      this.invalidData = true;
      return; 
    }

    this.userService
      .createUser(user)
      .subscribe(data => this.router.navigate(['list-user']));
  }
}
