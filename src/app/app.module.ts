import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { ProjectMetaDataComponent } from './feature/main-page/project-meta-data/project-meta-data.component';
import { ProjectLoginPageComponent } from './feature/main-page/project-meta-data/project-login-page/project-login-page.component';
import { ProjectRegisterPageComponent } from './feature/main-page/project-meta-data/project-register-page/project-register-page.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProjectMetaDataComponent,
    ProjectLoginPageComponent,
    ProjectRegisterPageComponent,
  ],
  imports: [

    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
