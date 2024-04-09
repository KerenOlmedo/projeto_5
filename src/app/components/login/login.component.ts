import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  forgotPassword() {
    console.log('Esqueci minha senha clicado');
  }

  register() {
    console.log('Cadastrar clicado');
  }
}
