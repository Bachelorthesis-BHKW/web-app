import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EsClientService {
  private static baseUrl = 'http://web-service:1337';

  constructor(private jwtService: JwtService, private httpClient: HttpClient) {}

  get<T>(uri: string): Observable<T> {
    return this.httpClient
      .get<T>(`${EsClientService.baseUrl}${uri}`, {
        headers: this.getAuthHeader(),
      })
      .pipe(catchError(EsClientService.handleError));
  }

  post<T>(uri: string, data: unknown): Observable<T> {
    return this.httpClient
      .post<T>(`${EsClientService.baseUrl}${uri}`, data, {
        headers: this.getAuthHeader(),
      })
      .pipe(catchError(EsClientService.handleError));
  }

  patch<T>(uri: string, data: unknown): Observable<T> {
    return this.httpClient
      .patch<T>(`${EsClientService.baseUrl}${uri}`, data, {
        headers: this.getAuthHeader(),
      })
      .pipe(catchError(EsClientService.handleError));
  }

  delete<T>(uri: string): Observable<T> {
    return this.httpClient
      .delete<T>(`${EsClientService.baseUrl}${uri}`, {
        headers: this.getAuthHeader(),
      })
      .pipe(catchError(EsClientService.handleError));
  }

  private getAuthHeader(): HttpHeaders | undefined {
    const jwt = this.jwtService.getJwt();
    let headers;
    if (jwt) headers = new HttpHeaders({ authorization: `Bearer ${jwt}` });
    return headers;
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}`);
    } // Return an observable with a user-facing error message.
    return throwError(
      `Something bad happened; please try again later. ${error.status}`
    );
  }
}
