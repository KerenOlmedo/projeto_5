import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}
  protected userLoggedId!: any;

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    console.log(this.userLoggedId);
  }

  protected infoProject() {
    this.router.navigate([`/project`]);
  }

  protected goBack() {
    this.router.navigate([`/dashboard`]);
  }

  protected newProject() {
    this.router.navigate([`/new-project`]);
  }

  protected projectsList = [
    {
      name: 'Projeto 1',
      description: '...',
      tasks: [
        {
          titulo: 'tarefa X',
        },
      ],
    },
    {
      name: 'Projeto 2',
      description: '...',
      tasks: [
        {
          titulo: 'tarefa X',
        },
      ],
    },
    {
      name: 'Projeto 3',
      description: '...',
      tasks: [
        {
          titulo: 'tarefa X',
        },
      ],
    },
  ];
}
