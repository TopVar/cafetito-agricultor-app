import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ParcialidadInterface } from '../../componentes-comunes/interfaces/parcialidad.interface';
import { CafetitoService } from '../../componentes-comunes/servicios/cafetito.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ingreso-parcialidad',
  templateUrl: './ingreso-parcialidad.component.html',
  styleUrls: ['./ingreso-parcialidad.component.css']
})
export class IngresoParcialidadComponent implements OnInit {

  @ViewChild('MatPaginator2') set matPaginator2(mp2: MatPaginator) {
    this.dataSource2.paginator = mp2;
  }

  displayedColumns2: string[] = ['id', 'cuenta', 'peso', 'estado', 'acciones'];
  dataSource2 = new MatTableDataSource<ParcialidadInterface>();

  constructor(private cefetitoService: CafetitoService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.cefetitoService.getParcialidadesEnRuta().subscribe(res =>{
      this.dataSource2.data = res
    })
    
  }

  aprobarIngreso(item: ParcialidadInterface){
    this.cefetitoService.autorizarIngreso(item.idParcialidad).subscribe(res =>{
      if(res){
        Swal.fire("Ingreso exitoso", 'Se ingresa correctamente','success');
        this.ngOnInit();
      }else{
        this.snack.open('No se pudo guardar los cambios', 'Aceptar',{
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    })
  }

}
