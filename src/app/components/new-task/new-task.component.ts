import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  saveTask() {
    this.router.navigate(['./dashboard']);
  }

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  saveNewTask() {}
}
