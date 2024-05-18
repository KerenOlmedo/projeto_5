import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/projects.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss'],
})
export class InfoProjectComponent {
  protected taskList: any;
  protected userLoggedId!: any;
  protected projectId!: any;
  protected taskId!: any;

  constructor(
    public router: Router,
    public taskService: TaskService,
    public projectService: ProjectService
  ) {}

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.projectId = localStorage.getItem('projectId');
    this.listTaks();
  }

  protected goBack() {
    this.router.navigate([`/dashboard`]);
  }
  protected newTask() {
    this.router.navigate([`/new-task`]);
  }

  protected editTask(id: any) {
    localStorage.setItem('taskId', id.toString());
    this.router.navigate([`/task`]);
  }

  protected deleteTask(id: string) {
    localStorage.setItem('taskId', id.toString());
    this.taskId = localStorage.getItem('taskId');
    this.taskService.deleteTask(this.taskId).subscribe(
      (data) => {
        alert('Projeto deletado com sucesso!');
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
  protected listTaks() {
    this.taskService.listTask().subscribe(
      (data) => {
        this.taskList = data;
        console.log(data[0].titulo);
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
