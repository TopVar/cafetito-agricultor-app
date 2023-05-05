import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CuentaAgr, CuentaInterface, VehiculosAsignados } from '../../componentes-comunes/interfaces/cuenta.interface';
import { TransportistaInterface } from '../../componentes-comunes/interfaces/transportista.interface';
import { AgricultorService } from '../../componentes-comunes/servicios/agricultor.service';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})
export class AgregarCuentaComponent implements OnInit {

  displayedColumns: string[] = ['peso', 'cantidad', 'acciones'];
  dataSource = new MatTableDataSource<CuentaInterface>();
  inicio: Boolean = true;
  generalFormGroup!: FormGroup;
  viewing: Boolean = true;
  displayedColumns2: string[] = ['placa', 'marca', 'estado', 'tipo', 'modelo', 'color', 'peso'];
  dataSource2 = new MatTableDataSource<VehiculosAsignados>();
  displayedColumns3: string[] = ['licencia', 'nombre', 'estado', 'tipo', 'tel', 'correo'];
  dataSource3 = new MatTableDataSource<TransportistaInterface>();


  constructor(private cuentaService: AgricultorService) { }

  ngOnInit(): void {
    this.cuentaService.getCuentasPorAprobarCorregirRechazadas().subscribe(res =>{
      this.dataSource.data = res;
    })
  }

  createVenta(){

  }

  applyFilter(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  verdetalle(cuenta: CuentaAgr){

  }

  modificar(item: CuentaInterface){

  }

  guardar(){
    
  }

}
