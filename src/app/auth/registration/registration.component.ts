import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../core/services/snackbar.service';
import { User } from '../../shared/interfaces/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm = this.formBuilder.group({
    nameControl: ['', Validators.required],
    companyControl: ['', Validators.required],
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
    const name = this.registrationForm.value.nameControl;
    const company = this.registrationForm.value.companyControl;
    const email = this.registrationForm.value.emailControl;
    const password = this.registrationForm.value.passwordControl;
    const user: User = {
      name,
      company,
      email,
      password,
    };
    this.userService.register(user).subscribe(
      () => {
        this.userService.login(email, password).subscribe(() => {
          this.router.navigate(['']);
          this.snackBarService.open('Success!');
        });
      },
      (error) => {
        this.snackBarService.open('Error logging in');
        console.warn(error);
      }
    );
  }
}
