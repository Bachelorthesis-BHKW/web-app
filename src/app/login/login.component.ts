import { Component, OnInit } from '@angular/core';
import { JwtService } from '../core/services/jwt.service';
import { UserService } from '../core/services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from '../core/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    emailControl: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    passwordControl: ['', Validators.required],
  });

  constructor(
    private jwt: JwtService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const email = this.loginForm.value.emailControl;
    const password = this.loginForm.value.passwordControl;
    this.userService.login(email, password).subscribe(
      (login) => {
        this.jwt.setJwt(login.token);
        this.router.navigate(['/energy-systems']);
      },
      (error) => {
        this.messageService.add(error);
      }
    );
  }
}
