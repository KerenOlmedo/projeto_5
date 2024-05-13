import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
  }

  formRegister: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    address: [null, Validators.required],
    password: [null, Validators.required],
    repeatPassword: [null, Validators.required],
  });

  login() {
    console.log('Login');
  }

  protected createUser() {
    if (this.formRegister.valid) {
      const user = {
        name: this.formRegister.get('name')?.value,
        address: this.formRegister.get('address')?.value,
        password: this.formRegister.get('password')?.value,
      };

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
