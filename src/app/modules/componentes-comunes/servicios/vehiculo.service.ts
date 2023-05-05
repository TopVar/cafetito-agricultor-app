import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';
import { VehiculoDto, VehiculoInterface } from '../interfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {    

  constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
            //obtenemos el token del localStorage
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get(environment.BASE_WS_LOCAL + '/agricultor/vehiculos/all', { headers });
    }

    registrar(param: VehiculoDto): Observable<any> {
      //obtenemos el token del localStorage
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.post(environment.BASE_WS_LOCAL + '/agricultor/vehiculos/registrar', { headers, param });
    }

    editar(param: VehiculoInterface): Observable<any> {
          //obtenemos el token del localStorage
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.post(environment.BASE_WS_LOCAL + '/agricultor/vehiculos/editar', { headers, param });
    }
}