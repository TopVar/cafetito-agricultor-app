import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';
import { LoginParams, UsuarioInterface } from '../interfaces/usuario.interface';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private servicioGeneral: GeneralService) { }

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

  public registrarBc(user: UsuarioInterface):Observable<Boolean>{
    return this.servicioGeneral.postData<Boolean, UsuarioInterface>(`${environment.BASE_WS_LOCAL}/cafetito/usuarios/crearUsuario`, user);
  }

  public getRolesAgr(param: LoginParams): Observable<any>{
    const token = param.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const user = param.username;

    return this.http.get(environment.BASE_WS_LOCAL + `/agricultor/usuarios/rol/${user}`, { headers, responseType: 'text' });
  }

  public getRolesBc(param: LoginParams): Observable<any>{
    const token = param.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const user = param.username;

    return this.http.get(environment.BASE_WS_LOCAL + `/cafetito/usuarios/rol/${user}`, { headers, responseType: 'text' });
  }

  public postPrueba(user: any){
    return this.http.post(`${environment.BASE_WS_LOCAL}/prueba`, user);
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }
}