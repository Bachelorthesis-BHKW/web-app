import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/interfaces/User';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  currentUser?: User;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserObservable()
      .subscribe((user) => (this.currentUser = user));
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
