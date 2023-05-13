import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';
import { AutenticationInterface } from '../interfaces/usuario.interface';
import { CuentaInterface, ParamCrearCuenta, RespuestaCreacion } from '../interfaces/cuenta.interface';
import { ParcialidadInterface } from '../interfaces/parcialidad.interface';
import { MensajeInterface } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class CafetitoService {   
  
  authDataString = sessionStorage.getItem('authData');
  authData: AutenticationInterface = JSON.parse(this.authDataString!);
  token = this.authData.token;

  constructor(private http: HttpClient) { }

    iswebserviceactive(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

        return this.http.get(environment.BASE_WS_LOCAL + '/isWebServiceActive', { headers });
    }

    getCuentasPorAprobar(estado: number): Observable<CuentaInterface[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<CuentaInterface[]>(environment.BASE_WS_LOCAL + `/cafetito/cuenta/estado/${estado}`, { headers });
    }

    crearCuenta(param: ParamCrearCuenta): Observable<RespuestaCreacion> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.post<RespuestaCreacion>(environment.BASE_WS_LOCAL + `/cafetito/cuenta/crear`,param, { headers });
    }

    getParcialidadesPesaje(): Observable<ParcialidadInterface[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<ParcialidadInterface[]>(environment.BASE_WS_LOCAL + `/cafetito/parcialidades/pesaje`, { headers });
    }

    pesajeParcialidad(idParcialidad: number, peso: number): Observable<MensajeInterface> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.post<MensajeInterface>(environment.BASE_WS_LOCAL + `/cafetito/cuenta/pesaje/${idParcialidad}/${peso}`, { headers });
    }

    pesajeParcialidadTolerancia(noCuenta: number): Observable<MensajeInterface> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.post<MensajeInterface>(environment.BASE_WS_LOCAL + `/cafetito/cuenta/tolerancia/${noCuenta}`, { headers });
    }

    getParcialidadesEnRuta(): Observable<ParcialidadInterface[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<ParcialidadInterface[]>(environment.BASE_WS_LOCAL + `/cafetito/parcialidades/ruta`, { headers });
    }

    autorizarIngreso(idParcialidad: number): Observable<any> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      console.log(this.token);
      console.log(headers);    
      return this.http.post<any>(environment.BASE_WS_LOCAL + `/cafetito/parcialidades/autorizarIngreso/${idParcialidad}`, null ,{ headers});
    }
}