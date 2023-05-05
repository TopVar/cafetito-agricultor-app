import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CuentaInterface, VehiculosAsignados } from '../../componentes-comunes/interfaces/cuenta.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { TransportistaInterface } from '../../componentes-comunes/interfaces/transportista.interface';

@Component({
  selector: 'app-bandeja-cuentas',
  templateUrl: './bandeja-cuentas.component.html',
  styleUrls: ['./bandeja-cuentas.component.css']
})
export class BandejaCuentasComponent implements OnInit {

  displayedColumns: string[] = ['peso', 'cantidad', 'acciones'];
  dataSource = new MatTableDataSource<CuentaInterface>();
  inicio: Boolean = true;
  generalFormGroup!: FormGroup;
  viewing: Boolean = true;
  displayedColumns2: string[] = ['placa', 'marca', 'estado', 'tipo', 'modelo', 'color', 'peso'];
  dataSource2 = new MatTableDataSource<VehiculosAsignados>();
  displayedColumns3: string[] = ['licencia', 'nombre', 'estado', 'tipo', 'tel', 'correo'];
  dataSource3 = new MatTableDataSource<TransportistaInterface>();

  constructor() {
    this.generalFormGroup = new FormGroup({
      placa: new FormControl({value: "", disabled: true}),
    })
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  modificar(item: CuentaInterface){
    console.log(item);
    this.inicio = false;
    
  }

  createTransportista(){

  }

  guardar(tipo: number){
    
  }

}
