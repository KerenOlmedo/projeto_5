import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoProjectComponent } from './components/info-project/info-project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    InfoProjectComponent,
    ProfileComponent,
    NewProjectComponent,
    NewTaskComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
