import { Component, OnInit } from '@angular/core';
import { TransportistaInterface } from '../../componentes-comunes/interfaces/transportista.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-autorizar-transportistas',
  templateUrl: './autorizar-transportistas.component.html',
  styleUrls: ['./autorizar-transportistas.component.css']
})
export class AutorizarTransportistasComponent implements OnInit {

  displayedColumns: string[] = ['licencia', 'nombre', 'estado', 'tipo', 'tel', 'correo', 'acciones'];
  dataSource = new MatTableDataSource<TransportistaInterface>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  autorizar(item: TransportistaInterface){

  }

  rechazar(item: TransportistaInterface){
    
  }

}
