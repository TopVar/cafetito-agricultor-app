import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/componentes-comunes/home/home.component';
import { LoginComponent } from './modules/componentes-comunes/login/login.component';
import { SignUpComponent } from './modules/componentes-comunes/sign-up/sign-up.component';
import { DashboardComponent } from './modules/agricultor/dashboard/dashboard.component';
import { DashboardBcComponent } from './modules/cafetito/dashboard-bc/dashboard-bc.component';
import { ProfileComponent } from './modules/agricultor/profile/profile.component';
import { AgregarVehiculoComponent } from './modules/agricultor/agregar-vehiculo/agregar-vehiculo.component';
import { AgregarTranspotistaComponent } from './modules/agricultor/agregar-transpotista/agregar-transpotista.component';
import { AgregarCuentaComponent } from './modules/agricultor/agregar-cuenta/agregar-cuenta.component';
import { BrowserModule } from '@angular/platform-browser';
import { EnviarParcialidadesComponent } from './modules/agricultor/enviar-parcialidades/enviar-parcialidades.component';
import { BandejaCuentasComponent } from './modules/cafetito/bandeja-cuentas/bandeja-cuentas.component';
import { AutorizarTransportistasComponent } from './modules/cafetito/autorizar-transportistas/autorizar-transportistas.component';
import { AutorizarVehiculosComponent } from './modules/cafetito/autorizar-vehiculos/autorizar-vehiculos.component';
import { PesajeParcialidadComponent } from './modules/cafetito/peso-cabal/pesaje-parcialidad/pesaje-parcialidad.component';
import { PesajeVehiculoComponent } from './modules/cafetito/peso-cabal/pesaje-vehiculo/pesaje-vehiculo.component';
import { CuentasCerradasComponent } from './modules/cafetito/cuentas-cerradas/cuentas-cerradas.component';
import { IngresoParcialidadComponent } from './modules/agricultor/ingreso-parcialidad/ingreso-parcialidad.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent,
    pathMatch: 'full'
  },
  { 
    path: 'signup', 
    component: SignUpComponent,
    pathMatch: 'full'
  },
  { 
    path: 'agricultor', 
    component: DashboardComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'vehiculos',
        component: AgregarVehiculoComponent
      },
      {
        path: 'transportistas',
        component: AgregarTranspotistaComponent
      },
      {
        path: 'ventas',
        component: AgregarCuentaComponent
      },
      {
        path: 'cuentas',
        component: EnviarParcialidadesComponent
      },

    ]
  },
  { 
    path: 'cafetito', 
    component: DashboardBcComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'cuentas',
        component: BandejaCuentasComponent
      },
      {
        path: 'autoriza/vehiculo',
        component: AutorizarVehiculosComponent
      },
      {
        path: 'autoriza/transportista',
        component: AutorizarTransportistasComponent
      },
      {
        path: 'pesaje/parcialidad',
        component: PesajeParcialidadComponent
      },
      {
        path: 'ingreso',
        component: IngresoParcialidadComponent
      },
      {
        path: 'cuentas/cerradas',
        component: CuentasCerradasComponent
      },
      {
        path: 'pesaje/vehiculo',
        component: PesajeVehiculoComponent
      },

      

    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
