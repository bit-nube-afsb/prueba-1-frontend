import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  response: string = '';
  constructor(fb: FormBuilder, private userService: UserService){
    this.loginForm = fb.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    const {email, password} = this.loginForm.value;
    this.userService.login({email: email, password: password}).subscribe({
      next: (data) =>{
        console.log(data);
      },
      error: (err) =>{
        console.error(err)
      }
    }
  )}

}
