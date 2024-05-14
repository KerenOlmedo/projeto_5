import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  protected profile() {
    this.router.navigate([`/profile`]);
  }

  protected goOut() {
    this.router.navigate([`/`]);
  }
}
