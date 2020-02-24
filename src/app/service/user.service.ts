import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registration(user: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'user/registration', JSON.stringify(user), this.httpOptions);
  }

  getAllUsers(token: string):Observable<any>
  {
      return this.http.get<any>(this.API_URL + 'user/get_allusers',{ headers: new HttpHeaders().set('token', token)});
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'user/login', JSON.stringify(user), this.httpOptions);
  }

  forgetPassword(email: string): Observable<any> {
    console.log(email);
    return this.http.post<any>(this.API_URL + 'user/forget_password', email, this.httpOptions);
  }

  resetPassword(user: any, token: string): Observable<any> {
  return this.http.post<any>(this.API_URL + 'user/reset_password', user, { headers: new HttpHeaders().set('token', token)});
  }

  getLabels(token: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'user/label/get_labels', { headers: new HttpHeaders().set('token', token)});
    }
}
