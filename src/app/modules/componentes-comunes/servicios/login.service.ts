import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    const encodedCredentials = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`
    });
    return this.http.get(environment.BASE_WS_LOCAL + '/login', { headers, responseType: 'text' }).pipe(
      map((response: any) => {
        // guarda el token en localStorage
        localStorage.setItem('token', response);
        return response;
      })
    );
  }

  iswebserviceactive(): Observable<any> {
                  //obtenemos el token del localStorage
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(environment.BASE_WS_LOCAL + '/isWebServiceActive', { headers });
  }

}