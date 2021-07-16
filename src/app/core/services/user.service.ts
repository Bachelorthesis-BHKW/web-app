import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EsClientService } from './es-client.service';
import { User } from '../../shared/interfaces/User';
import { Login } from '../../shared/interfaces/Login';
import { JwtService } from './jwt.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static userKey = 'user';
  private static userUri = '/users';

  private readonly user: BehaviorSubject<User | undefined>;

  constructor(
    private esClient: EsClientService,
    private jwtService: JwtService
  ) {
    this.user = new BehaviorSubject<User | undefined>(
      UserService.readUserFromLocalStorage()
    );
  }

  login(email: string, password: string): Observable<Login> {
    return this.esClient
      .post<Login>(`${UserService.userUri}/login`, {
        email,
        password,
      })
      .pipe(
        map((login) => {
          this.jwtService.setJwt(login.token);
          return login;
        })
      );
  }

  logout(): void {
    this.user.next(undefined);
    this.jwtService.clearJwt();
    UserService.clearUserFromLocalStorage();
  }

  register(user: User): Observable<User> {
    return this.esClient.post<User>(`${UserService.userUri}/`, user).pipe(
      map((user) => {
        this.user.next(user);
        UserService.writeUserIntoLocalStorage(user);
        return user;
      })
    );
  }

  fetchUser(): void {
    this.esClient.get<User>(`${UserService.userUri}/`).subscribe((user) => {
      this.user.next(user);
      UserService.writeUserIntoLocalStorage(user);
    });
  }

  getUser(): User | undefined {
    return this.user.getValue();
  }

  getUserObservable(): Observable<User | undefined> {
    return this.user;
  }

  private static writeUserIntoLocalStorage(user: User): void {
    localStorage.setItem(UserService.userKey, JSON.stringify(user));
  }

  private static clearUserFromLocalStorage(): void {
    localStorage.removeItem(UserService.userKey);
  }

  private static readUserFromLocalStorage(): User | undefined {
    const userJson: string | null = localStorage.getItem(UserService.userKey);
    let user: User | undefined;
    if (userJson) user = JSON.parse(userJson);
    else user = undefined;

    return user;
  }
}
