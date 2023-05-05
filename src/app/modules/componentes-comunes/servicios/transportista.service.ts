import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';
import { TransportistaDto, TransportistaInterface } from '../interfaces/transportista.interface';

@Injectable({
  providedIn: 'root'
})
export class TransportistaService {    

  constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
            //obtenemos el token del localStorage
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get(environment.BASE_WS_LOCAL + '/agricultor/transportistas/all', { headers });
    }

    registrar(param: TransportistaDto): Observable<any> {
          //obtenemos el token del localStorage
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.post(environment.BASE_WS_LOCAL + '/agricultor/transportistas/registrar', param,{ headers});
    }

    editar(param: TransportistaInterface): Observable<any> {
          //obtenemos el token del localStorage
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.put(environment.BASE_WS_LOCAL + '/agricultor/transportistas/editar',param, { headers});
    }
}