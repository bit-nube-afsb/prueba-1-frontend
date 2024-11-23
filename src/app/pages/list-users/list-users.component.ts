import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{
  public users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.listUsers().subscribe({
        next: (data) =>{
          this.users = data;
        },
        error: (err) =>{
          console.error(err)
        }
      });
  }

}
