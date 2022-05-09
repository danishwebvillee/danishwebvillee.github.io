import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit(): void {    
  }
  signIn() { 
    this.authService.GoogleAuth()
  }
  
}
