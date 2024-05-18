import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  protected projectsList: any;
  protected projectId: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.lisProjects();
  }

  protected editProject(id: any) {
    localStorage.setItem('projectId', id.toString());
    this.projectId = localStorage.getItem('projectId');
    this.router.navigate([`/project`]);
  }

  protected deleteProject(id: string) {
    localStorage.setItem('projectId', id.toString());
    this.projectId = localStorage.getItem('projectId');
    this.projectService.deleteProject(this.projectId).subscribe(
      (data) => {
        alert('Projeto deletado com sucesso!');
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }

  protected goBack() {
    this.router.navigate([`/dashboard`]);
  }

  protected newProject() {
    this.router.navigate([`/new-project`]);
  }

  protected lisProjects() {
    this.projectService.listProject().subscribe(
      (data) => {
        this.projectsList = data;
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
