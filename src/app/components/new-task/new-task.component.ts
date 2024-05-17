import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  protected taskList: any;
  protected userLoggedId!: any;
  protected projectId!: any;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    public taskService: TaskService
  ) {}

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.projectId = localStorage.getItem('projectId');
    this.listTaks();
  }

  formRegister: FormGroup = this.formBuilder.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    status: [null, Validators.required],
  });

  saveTask() {
    this.router.navigate(['./dashboard']);
  }

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  protected saveNewTask() {
    const task = {
      title: this.formRegister.get('title')?.value,
      description: this.formRegister.get('description')?.value,
      status: this.formRegister.get('status')?.value,
    };
    this.taskService
      .createTask(task, this.userLoggedId, this.projectId)
      .subscribe(
        (data) => {
          console.log(data);

          alert(`Tarefa adicionada com sucesso!`);
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
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }
}
