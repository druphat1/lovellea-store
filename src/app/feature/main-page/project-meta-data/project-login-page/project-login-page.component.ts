import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-login-page',
  templateUrl: './project-login-page.component.html',
  styleUrls: ['./project-login-page.component.css']
})
export class ProjectLoginPageComponent implements OnInit {
 username = '';
 password = '';
 constructor(private router: Router, private toasterService: ToastrService){}
  ngOnInit(){
    localStorage.setItem(
      'users',
      JSON.stringify([
        { username: 'admin', password: '12345' },
        { username: 'user', password: 'user123' }
      ])
    );
  }
  login(){
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const isValid = users.some(
    (u:any)=>
      u.username === this.username && u.password === this.password
    );
    if(isValid){
      this.toasterService.success('Login Successful');
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/lovelyGiftCenter']);
    }
    else{
      alert('Invalid username or password');
    }
  }
  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
  }
  registerMain(){
    this.router.navigate(['/lovelyGiftCenter/register']);
  }
}
