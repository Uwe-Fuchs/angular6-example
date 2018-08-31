import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from "../model/user";
import { USERS } from "./mock-users";

@Injectable()
export class UserService {
  private baseUrl: string = 'http://localhost:8080/user-portal/users';

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
    // return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
    // return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User): Observable<User> {
    USERS.push(user);
    return of(user);
    // return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return of(user);
    // return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    USERS.filter(user => user.id !== id);
    return of(null as User);
    // return this.http.delete(this.baseUrl + '/' + id);
  }
}
