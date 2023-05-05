import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { LoginParams } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token!: string;
  user!: string;
  roles!: string;

  constructor(private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const token = params['token'];
      const user = params['user'];
      this.token = token;
      this.user = user;
      console.log(token, user); // Muestra el valor del parámetro 'token' en la consola
    });
    
    
    const param: LoginParams = {
      token: this.token,
      username: this.user
    }
    console.log(param);
    
    this.loginService.getRolesAgr(param).subscribe(res =>{
      console.log("que roles tiene",res);
      this.roles = res;      
    })

    if(this.roles){
      this.loginService.getRolesBc(param).subscribe(res =>{
        console.log("que roles tiene",res);
        this.roles = res;      
      })
    } 

    
  }

}
