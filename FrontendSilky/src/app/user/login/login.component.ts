import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/Services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;
  done = false;
  constructor(
    public authservice: AuthService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formLog = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get form() { return this.formLog.controls; }

  login(): void {
    if (this.formLog.invalid) {
      return;
    }
    this.done = true;
    this.authservice.login(this.formLog.value.username, this.formLog.value.password);
  }
}
