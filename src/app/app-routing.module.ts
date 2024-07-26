import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodohomeComponent } from './todohome/todohome.component';

const routes: Routes = [
  { path: 'home', component: TodohomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
