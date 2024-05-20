import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  formRegister: FormGroup;
  protected userLoggedId!: any;
  protected projectId!: any;
  protected taskId!: any;
  protected taskSelected!: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.formRegister = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.userLoggedId = localStorage.getItem('userId');
    this.projectId = localStorage.getItem('projectId');
    this.taskId = localStorage.getItem('taskId');
    this.getTaskId();
  }

  goBack() {
    this.router.navigate(['./dashboard']);
  }

  getTaskId() {
    this.taskService.listTaskId(this.taskId).subscribe(
      (data) => {
        this.taskSelected = data[0];
        console.log(this.taskSelected);

        this.formRegister.patchValue({
          title: this.taskSelected.titulo,
          description: this.taskSelected.descricao,
          status: this.taskSelected.status,
        });
      },
      (error) => {
        console.error('Erro ao fazer requisição:', error);
      }
    );
  }

  saveEditTask() {
    if (this.formRegister.valid && this.formRegister.dirty) {
      const updatedTask = {
        title: this.formRegister.get('title')?.value,
        description: this.formRegister.get('description')?.value,
        status: this.formRegister.get('status')?.value,
      };

      this.taskService
        .updatetTask(
          updatedTask,
          this.userLoggedId,
          this.projectId,
          this.taskId
        )
        .subscribe(
          (data) => {
            alert('Tarefa atualizada com sucesso!');
            this.router.navigate(['./project']);
          },
          (error) => {
            console.error('Erro ao fazer requisição:', error);
          }
        );
    }
  }
}
