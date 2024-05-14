import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoProjectComponent } from './components/info-project/info-project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project', component: InfoProjectComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'new-task', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
