import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, ReplaySubject, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiKey = 'AIzaSyARVrYm2rBJnRbxbxodNhBunQUfcj9cK30';
  private signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
  private tokenExpirationTimer: any;

  user = new BehaviorSubject<User|null>(null);
  // new User('', '', '', new Date())

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signupUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    console.log('Logging in');
    return this.http
      .post<AuthResponse>(this.loginUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn))
      );
  }

  autoLogin() {
    if(!localStorage.getItem('userData')) return;

    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    // localStorage.clear();
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['/auth']);
  }
  /**
   * Called whenever the user is logged in. Sets a timer to logout.
   * @param expirationDuration number of miliseconds until logged in user token expires
   */
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let errMsg = 'An unknown error occurred!';
    console.log(errorResponse);
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errMsg));
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errMsg = 'This email exists already';
        break;
      case 'INVALID_PASSWORD':
        errMsg = 'Invalid Password';
        break;
    }
    return throwError(() => new Error(errMsg));
  }
}
