import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  protected formRegister!: FormGroup;
  protected listUser = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.listUsers();
    this.formRegister = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      repeatPassword: [null, Validators.required],
    });
  }

  protected createUser() {
    const user = {
      name: this.formRegister.get('name')?.value,
      address: this.formRegister.get('address')?.value,
      password: this.formRegister.get('password')?.value,
      repeatPassword: this.formRegister.get('repeatPassword')?.value,
    };

    if (user.password !== user.repeatPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    if (this.formRegister.valid) {
      this.userService.createUser(user).subscribe(
        (data) => {
          alert('Usuário cadastrado com sucesso!');
          this.router.navigate(['./']);
        },
        (error) => {
          console.error('Erro ao fazer requisição:', error);
        }
      );
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

  goBack() {
    this.router.navigate(['./']);
  }
}
