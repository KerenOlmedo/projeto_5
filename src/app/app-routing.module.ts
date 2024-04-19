import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';

const routes: Routes = [
  {
    path: '',
    component: InitialScreenComponent,
  },
  {
    path: '/dashboard',
    component: InitialScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
