import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private static key = 'jwt';
  private storage = window.localStorage;

  constructor() {}

  setJwt(jwt: string): void {
    this.storage.setItem(JwtService.key, jwt);
  }
  getJwt(): string | null {
    return this.storage.getItem(JwtService.key);
  }
  clearJwt(): void {
    this.storage.removeItem(JwtService.key);
  }
}
