import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, map} from 'rxjs';
import { AutenticationInterface } from '../interfaces/usuario.interface';
import { BandejaCuentas, CuentaInterface } from '../interfaces/cuenta.interface';
import { EnvioParcialidadInterface, ParcialidadInterface } from '../interfaces/parcialidad.interface';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {   
  
  authDataString = sessionStorage.getItem('authData');
  authData: AutenticationInterface = JSON.parse(this.authDataString!);
  token = this.authData.token;

  constructor(private http: HttpClient) { }

    iswebserviceactive(): Observable<any> {
            //obtenemos el token del localStorage
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get(environment.BASE_WS_LOCAL + '/isWebServiceActive', { headers });
    }

    getCuentasPorAprobarCorregirRechazadas(): Observable<any> {
      //obtenemos el token del localStorage
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get(environment.BASE_WS_LOCAL + '/agricultor/cuenta/estado', { headers });
    }

    getCuentasGeneral(): Observable<BandejaCuentas[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<BandejaCuentas[]>(environment.BASE_WS_LOCAL + '/agricultor/cuenta/general', { headers });
    }

    getParcialidadesCuenta(idCuenta: number): Observable<ParcialidadInterface[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<ParcialidadInterface[]>(environment.BASE_WS_LOCAL +  `/agricultor/parcialidades/${idCuenta}`, { headers });
    }

    envioParcialidad(param: EnvioParcialidadInterface): Observable<EnvioParcialidadInterface>{
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.post<EnvioParcialidadInterface>(environment.BASE_WS_LOCAL +  `/agricultor/parcialidades/enviar/parcialidad`, param, { headers });
    }

    crearVenta(param: CuentaInterface): Observable<any>{
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.post(environment.BASE_WS_LOCAL +  `/agricultor/cuenta/crear`, param, { headers });
    }
}