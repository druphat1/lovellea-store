import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { ProjectLoginPageComponent } from './feature/main-page/project-meta-data/project-login-page/project-login-page.component';
import { ProjectRegisterPageComponent } from './feature/main-page/project-meta-data/project-register-page/project-register-page.component';
const routes: Routes = [
  { path: 'lovelyGiftCenter', component: MainPageComponent },
  { path: 'lovelyGiftCenter/login', component: ProjectLoginPageComponent },
  {path:'lovelyGiftCenter/register',component: ProjectRegisterPageComponent},
  { path: '**', redirectTo: 'lovelyGiftCenter' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
