import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss'],
})
export class InfoProjectComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}

  protected goBack() {
    this.router.navigate([`/dashboard`]);
  }

  protected listTask = [
    {
      titulo: 'Titulo da Tarefa',
      description: 'descrição da tarefa',
    },
    {
      titulo: 'Titulo da Tarefa',
      description: 'descrição da tarefa',
    },
    {
      titulo: 'Titulo da Tarefa',
      description: 'descrição da tarefa',
    },
    {
      titulo: 'Titulo da Tarefa',
      description: 'descrição da tarefa',
    },
  ];
}
