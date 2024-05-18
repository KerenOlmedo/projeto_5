import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/projects.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  protected userLoggedId!: any;
  protected projectId!: any;
  protected taskId!: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.projectId = localStorage.getItem('projectId');
    this.taskId = localStorage.getItem('taskId');
    console.log(this.taskId);
  }

  formRegister: FormGroup = this.formBuilder.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    status: [null, Validators.required],
  });

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  saveEditTask() {
    const projectForm: any = {
      title: this.formRegister.get('title')?.value,
      description: this.formRegister.get('description')?.value,
      status: this.formRegister.get('status')?.value,
    };

    this.taskService
      .updatetTask(projectForm, this.projectId, this.userLoggedId, this.taskId)
      .subscribe(
        (data) => {
          alert(`Tarefa criada com sucesso!`);
          this.router.navigate(['./project']);
        },
        (error) => {
          console.error('Erro ao fazer requisição:', error);
        }
      );
  }
}
