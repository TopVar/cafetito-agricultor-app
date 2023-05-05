import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTranspotistaComponent } from './modules/agricultor/agregar-transpotista/agregar-transpotista.component';
import { BandejaCuentasComponent } from './modules/cafetito/bandeja-cuentas/bandeja-cuentas.component';
import { HomeComponent } from './modules/componentes-comunes/home/home.component';
import { LoginComponent } from './modules/componentes-comunes/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { SignUpComponent } from './modules/componentes-comunes/sign-up/sign-up.component';
import { NavbarComponent } from './modules/componentes-comunes/navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarVehiculoComponent } from './modules/agricultor/agregar-vehiculo/agregar-vehiculo.component'; 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { AutorizarVehiculosComponent } from './modules/cafetito/autorizar-vehiculos/autorizar-vehiculos.component';
import { AutorizarTransportistasComponent } from './modules/cafetito/autorizar-transportistas/autorizar-transportistas.component';
import { AgregarCuentaComponent } from './modules/agricultor/agregar-cuenta/agregar-cuenta.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './modules/agricultor/dashboard/dashboard.component';
import { DashboardBcComponent } from './modules/cafetito/dashboard-bc/dashboard-bc.component';
import { ProfileComponent } from './modules/agricultor/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './modules/agricultor/sidebar/sidebar.component';
import { SidebarBcComponent } from './modules/cafetito/sidebar-bc/sidebar-bc.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarTranspotistaComponent,
    BandejaCuentasComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    AgregarVehiculoComponent,
    AutorizarVehiculosComponent,
    AutorizarTransportistasComponent,
    AgregarCuentaComponent,
    DashboardComponent,
    DashboardBcComponent,
    ProfileComponent,
    SidebarComponent,
    SidebarBcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
