import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  forgotPassword() {
    console.log('Esqueci minha senha clicado');
  }

  register() {
    this.router.navigate([`/register`]);
    console.log('Cadastrar clicado');
  }

  login() {
    this.router.navigate([`/dashboard`]);
  }
}
