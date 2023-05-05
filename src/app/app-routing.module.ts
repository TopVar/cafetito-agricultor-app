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

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { 
    path: 'home/:token/:user', 
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
    path: 'agricultor/:token/:user', 
    component: DashboardComponent,
    pathMatch: 'full',
    /* children: [
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
        path: 'cuentas',
        component: AgregarCuentaComponent
      },

    ] */
  },
  { 
    path: 'cafetito/:token/:user', 
    component: DashboardBcComponent,
    pathMatch: 'full'
  },
  {
    path: 'agricultor/vehiculos',
    component: AgregarVehiculoComponent,
    pathMatch: 'full'
  },
  {
    path: 'agricultor/transportistas',
    component: AgregarTranspotistaComponent,
    pathMatch: 'full'
  },
  {
    path: 'agricultor/cuentas',
    component: AgregarCuentaComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
