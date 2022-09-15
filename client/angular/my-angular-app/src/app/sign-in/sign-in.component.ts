import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {}

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  submitted = false;

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      typeof this.loginForm.value.username == 'string' &&
      typeof this.loginForm.value.password == 'string'
    ) {
      this.submitted = true;
      // this.loginForm.reset();

      this.auth
        .authenticate(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
        .subscribe();
    }
  }
}
