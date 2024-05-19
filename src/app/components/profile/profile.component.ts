import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/projects.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  protected userLoggedId!: any;
  protected user!: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.getUserId();
  }

  formRegister: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    address: [null, Validators.required],
    password: [null, Validators.required],
  });

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  getUserId() {
    this.userService.getUserId(this.userLoggedId).subscribe(
      (data) => {
        this.user = data[0];
        this.formRegister.patchValue({
          name: this.user.nome,
          address: this.user.email,
          password: this.user.senha,
        });
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }

  saveEditTask() {
    if (this.formRegister.dirty && this.formRegister.valid) {
      const updatedUser = {
        name: this.formRegister.get('name')?.value,
        address: this.formRegister.get('address')?.value,
        password: this.formRegister.get('password')?.value,
      };

      this.userService.updateUser(updatedUser, this.userLoggedId).subscribe(
        (data) => {
          alert(`Perfil atualizado com sucesso!`);
          this.router.navigate(['./project']);
        },
        (error) => {
          console.error('Erro ao fazer requisição:', error);
        }
      );
    }
  }
}
