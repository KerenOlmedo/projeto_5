import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected listUser: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,

    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listUsers();
  }

  formRegister: FormGroup = this.formBuilder.group({
    address: [null, Validators.required, Validators.email],
    password: [null, Validators.required],
  });

  forgotPassword() {
    console.log('Esqueci minha senha clicado');
  }

  register() {
    this.router.navigate([`/register`]);
  }

  login() {
    const userForm = {
      address: this.formRegister.get('address')?.value,
      password: this.formRegister.get('password')?.value,
    };

    let userFound = false;

    for (const user of this.listUser) {
      if (user.email === userForm.address && user.senha === userForm.password) {
        userFound = true;
        localStorage.setItem('userId', user.id.toString());
        break;
      }
    }

    if (userFound) {
      this.router.navigate([`/dashboard`]);
    } else {
      alert('Email ou senha incorretos!');
    }
  }

  protected listUsers() {
    this.userService.listUser().subscribe(
      (data) => {
        this.listUser = data;
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
