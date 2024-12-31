import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';

interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {
  constructor() {
    super();
  }

  login(credentials: LoginCredentials) {
    // return this.post('/auth/login', credentials);
    return new Promise((resolve, reject) => {
      const { email, password } = credentials;

      // Fake API logic
      setTimeout(() => {
        if (email === 'hieptv' && password === '123') {
          resolve({
            token: 'fake-jwt-token',
            user: {
              id: 1,
              email: 'test@example.com',
              name: 'Test User',
            },
          });
        } else {
          reject({
            error: 'Invalid email or password',
          });
        }
      }, 1000); // Giả lập thời gian trễ của API
    });
  }

  logout() {
    return this.post('/auth/logout');
  }
}
