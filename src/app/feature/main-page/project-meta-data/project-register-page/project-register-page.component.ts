import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-register-page',
  templateUrl: './project-register-page.component.html',
  styleUrls: ['./project-register-page.component.css']
})
export class ProjectRegisterPageComponent {
  data ={
    title : 'Druphat',
  }
  constructor(private router: Router){}
  onkeyUp(title:string){
    this.data.title = title;
  }
  confirm(){
    this.router.navigate(['/lovelyGiftCenter/login']);
  }

}
