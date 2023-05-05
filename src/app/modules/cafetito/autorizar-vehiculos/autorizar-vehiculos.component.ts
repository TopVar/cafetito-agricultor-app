import { Component, OnInit } from '@angular/core';
import { VehiculoInterface } from '../../componentes-comunes/interfaces/vehiculo.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-autorizar-vehiculos',
  templateUrl: './autorizar-vehiculos.component.html',
  styleUrls: ['./autorizar-vehiculos.component.css']
})
export class AutorizarVehiculosComponent implements OnInit {

  displayedColumns: string[] = ['placa', 'marca', 'estado', 'tipo', 'modelo', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<VehiculoInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  autorizar(item: VehiculoInterface){

  }

  rechazar(item: VehiculoInterface){
    
  }

}
