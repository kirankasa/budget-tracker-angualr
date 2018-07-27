import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  private user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  register(user: User) {
    this.userService.registerUser(user).subscribe(user => {
      console.log("registered " + user.userName)
    });
  }

}
