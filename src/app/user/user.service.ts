import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS_URL = environment.apiUrl + "users";

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.USERS_URL, user)
  }
}
