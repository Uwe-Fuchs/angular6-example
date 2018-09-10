import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material';
import { UserService } from "../service/user.service";
import { User } from "../model/user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>();
  users: User[];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(data => {
        this.users = data;
        this.dataSource.data = this.users;
      })
  }
  
  deleteUser(userId: number): void {
    this.userService
      .deleteUser(userId)
      .subscribe(data => {
        this.users = this.users.filter(u => u.id !== userId);
        this.dataSource.data = this.users;
      })
  };

  editUser(userId: number): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", userId.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
