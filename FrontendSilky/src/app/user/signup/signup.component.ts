import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/Services/auth/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formReg: FormGroup;
  done = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService
  ) {
    if (this.authservice.isLogged()) {
      this.router.navigate(['']);
    }
  }
  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get form() { return this.formReg.controls; }

  onClick(): void {
    if (this.formReg.invalid) {
      return;
    }
    this.done = true;
    this.authservice.register(this.formReg.value);
  }

}
