import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Silky';

  constructor(private titleService: Title, private router:Router){
    this.titleService.setTitle(this.title);
  }
  ngOnInit(): void {
    this.router.navigateByUrl('/home');
  }

}
