import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EsClientService } from './es-client.service';
import { Login } from '../../shared/interfaces/Login';
import { User } from '../../shared/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static userUri = '/users';

  constructor(private esClient: EsClientService) {}

  login(email: string, password: string): Observable<Login> {
    return this.esClient.post<Login>(`${UserService.userUri}/login`, {
      email,
      password,
    });
  }

  register(user: User): Observable<User> {
    return this.esClient.post<User>(UserService.userUri, user);
  }
}
