import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {    

  constructor(private http: HttpClient) { }

    iswebserviceactive(): Observable<any> {
            //obtenemos el token del localStorage
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get(environment.BASE_WS_LOCAL + '/isWebServiceActive', { headers });
    }

    getCuentasPorAprobarCorregirRechazadas(): Observable<any> {
      //obtenemos el token del localStorage
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get(environment.BASE_WS_LOCAL + '/agricultor/cuenta/estado', { headers });
    }
}