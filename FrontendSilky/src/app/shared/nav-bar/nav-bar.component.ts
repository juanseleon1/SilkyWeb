import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public authservice: AuthService
  ) { }

  ngOnInit(): void {

  }

  get isLogged(): boolean{
    return this.authservice.isLogged();
  }

  get isAdmin(): boolean{
    return this.authservice.isAdminAuth;
  }
}
