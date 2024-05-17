import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/core/service/interfaces/IProject';
import { ProjectService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
  protected userLoggedId!: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
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
