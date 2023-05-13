import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticationInterface } from '../../componentes-comunes/interfaces/usuario.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  user!: string;
  roles!: string;

  constructor() { }

  ngOnInit(): void {
     const authDataString = sessionStorage.getItem('authData');
      const authData: AutenticationInterface = JSON.parse(authDataString!);
      this.roles = authData.roles;
      console.log("roles", this.roles);
      
    }


}
