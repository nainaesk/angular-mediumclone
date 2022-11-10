import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  url = environment.apiUrl + '/users';

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
    .post<AuthResponseInterface>(this.url, data)
    .pipe(map((res: AuthResponseInterface) => res.user))
  }
}