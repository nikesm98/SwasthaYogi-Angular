import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthComponent } from "./auth/auth.component";
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'SwasthaYogi-Angular';
    users: any[] = [];
    name: string = '';
    email: string = '';

    constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    const newUser = { name: this.name, email: this.email };
    this.userService.addUser(newUser).subscribe(user => {
      this.users.push(user);
      this.name = '';
      this.email = '';
    });
  }
}
