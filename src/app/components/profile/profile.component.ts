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

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.saveProfile();
  }

  formRegister: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    address: [null, Validators.required],
    password: [null, Validators.required],
  });

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  saveProfile() {
    // const projectForm: any = {
    //   name: this.formRegister.get('name')?.value,
    //   address: this.formRegister.get('address')?.value,
    //   password: this.formRegister.get('password')?.value,
    // };

    this.userService.getUserId(this.userLoggedId).subscribe(
      (data) => {
        console.log(data);

        this.router.navigate(['./dashboard']);
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
