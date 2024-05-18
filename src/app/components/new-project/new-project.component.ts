import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
  protected userLoggedId!: any;
  protected project: any;
  protected projectId!: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.loadProject();
    this.projectId = localStorage.getItem('projectId');
    this.userLoggedId = localStorage.getItem('userId');
    console.log(this.userLoggedId);
  }

  formRegister: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
  });

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  loadProject() {
    if (this.projectId) {
      this.projectService.getProjectById(this.projectId).subscribe(
        (data) => {
          this.project = data;
          console.log(this.project);
        },
        (error) => {
          console.error('Erro ao carregar projeto:', error);
        }
      );
    }
  }

  saveNewProject() {
    const projectForm: any = {
      name: this.formRegister.get('name')?.value,
      description: this.formRegister.get('description')?.value,
    };

    this.projectService.createProject(projectForm, this.userLoggedId).subscribe(
      (data) => {
        alert(`Projeto criado com sucesso!`);
        this.router.navigate(['./dashboard']);
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
