import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginService.login('bcuser1', 'admin').toPromise().then(token => {
        console.log(token);
        this.router.navigate(['/home']);
      },
      error => {
        console.log('error');
      }
      
    );
  }

}
