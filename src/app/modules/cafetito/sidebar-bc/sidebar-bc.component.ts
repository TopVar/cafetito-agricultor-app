import { Component, OnInit } from '@angular/core';
import { AutenticationInterface } from '../../componentes-comunes/interfaces/usuario.interface';

@Component({
  selector: 'app-sidebar-bc',
  templateUrl: './sidebar-bc.component.html',
  styleUrls: ['./sidebar-bc.component.css']
})
export class SidebarBcComponent implements OnInit {

  roles!: string;

  constructor() { }

  ngOnInit(): void {
      const authDataString = sessionStorage.getItem('authData');
      const authData: AutenticationInterface = JSON.parse(authDataString!);
      this.roles = authData.roles;
      console.log("roles", this.roles);
      
  }

}
