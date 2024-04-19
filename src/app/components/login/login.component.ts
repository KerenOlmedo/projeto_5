import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  forgotPassword() {
    console.log('Esqueci minha senha clicado');
  }

  register() {
    console.log('Cadastrar clicado');
  }

  login() {
    this.router.navigate([`/dashboard`]);
  }
}
