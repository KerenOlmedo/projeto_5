import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  login() {
    console.log('Login');
  }

  goBack() {
    this.router.navigate(['./']);
  }
}
