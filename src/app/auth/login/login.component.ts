import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    emailControl: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    passwordControl: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBarService: SnackbarService
  ) {}

  onLogin(): void {
    const email = this.loginForm.value.emailControl;
    const password = this.loginForm.value.passwordControl;
    this.userService.login(email, password).subscribe(
      () => {
        this.userService.fetchUser();
        this.router.navigate(['/energy-systems']);
      },
      (error) => {
        this.snackBarService.open('Error logging in');
        console.warn(error);
      }
    );
  }
}
