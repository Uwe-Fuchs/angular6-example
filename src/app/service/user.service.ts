import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from "../model/user";
import { USERS } from "./mock-users";

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserById(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  // createUser(user: User) {
  //   return this.http.post(this.baseUrl, user);
  // }

  // updateUser(user: User) {
  //   return this.http.put(this.baseUrl + '/' + user.id, user);
  // }

  // deleteUser(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
}
