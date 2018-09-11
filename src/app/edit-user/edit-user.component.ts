import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { User } from "../model/user";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private router: Router, private userService: UserService, private location: Location) { 
  }

  ngOnInit(): void {

    let userId = localStorage.getItem("editUserId");

    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }

    this.userService
      .getUserById(+userId)
      .subscribe(user => this.user = user);
  }

  save(): void {
    this.userService
      .updateUser(this.user)
      .pipe(first())
      .subscribe(
        data => this.router.navigate(['list-user']),
        error =>alert(error)
      );
  }

  goBack(): void {
    this.location.back();
  }
}
