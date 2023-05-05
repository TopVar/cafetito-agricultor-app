import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginParams } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  generalFormGroup!: FormGroup;
  roles!: string;

  constructor(private loginService: LoginService, 
    private router: Router) { 
      this.generalFormGroup =  new FormGroup({
        user: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {}

  login(){
    let user = this.generalFormGroup.get("user")?.value
    let pass = this.generalFormGroup.get("password")?.value
//'bcuser1', 'admin'
    console.log("QUE TRAE: ", user, pass);
    
    this.loginService.login(user, pass).subscribe(token => {
        console.log(token);

        const param: LoginParams = {
          token: token,
          username: user
        }
        console.log("parametros", param);
        
        this.loginService.getRolesAgr(param).subscribe(res =>{
          console.log("que roles tiene",res);
          this.roles = res;  
          this.router.navigate(['/agricultor', token, user]);
        })
    
        if(this.roles){
          this.loginService.getRolesBc(param).subscribe(res =>{
            console.log("que roles tiene",res);
            this.roles = res; 
            this.router.navigate(['/cafetito', token, user]);     
          })
        }else{
          this.router.navigate(['/login']);
        } 
      },
      error => {
        console.log('error');
      }
      
    );    
  }

}
