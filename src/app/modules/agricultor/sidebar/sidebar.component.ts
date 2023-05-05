import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  token!: string;
  user!: string;
  roles!: string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const token = params['token'];
      const user = params['user'];
      this.token = token;
      this.user = user;
      console.log("EN EL SIDEBAR ", this.token, this.user); // Muestra el valor del parámetro 'token' en la consola
    });
  }

  redireccion(){
    this.router.navigate(['agricultor/',this.token,this.user,'profile'])
  }

  redireccion1(){
    this.router.navigate(['agricultor/vehiculos'])
  }
  redireccion2(){
    this.router.navigate([`agricultor/transportistas`])
  }
  redireccion3(){
    this.router.navigate([`agricultor/cuentas`])
  }
  /* redireccion4(){
    this.router.navigate(['/agricultor/'+this.token +'/'+ this.user+'/profile'])
  }
  redireccion5(){
    this.router.navigate(['/agricultor/'+this.token +'/'+ this.user+'/profile'])
  }
  redireccion6(){
    this.router.navigate(['/agricultor/'+this.token +'/'+ this.user+'/profile'])
  } */

}
