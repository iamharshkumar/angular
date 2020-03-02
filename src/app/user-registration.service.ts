import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) {
  }

  public doRegistration(user: User) {
    return this.http.post('http://localhost:8080/create', user, {responseType: 'text' as 'json'});
  }
}
