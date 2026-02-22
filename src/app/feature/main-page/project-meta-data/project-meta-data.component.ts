import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-meta-data',
  templateUrl: './project-meta-data.component.html',
  styleUrls: ['./project-meta-data.component.css']
})
export class ProjectMetaDataComponent {
   @ViewChild('slider', { static: false })slider!: ElementRef;
    products = [
    {
      name: 'Lovely Brown Bear',
      image: 'assets/bear.png',
      oldPrice: '150$',
      price: '46$'
    },
    {
      name: 'Beautiful Old Airplane',
      image: 'assets/dracula-removebg-preview.png',
      oldPrice: '230$',
      price: '23$'
    },
    {
      name: 'Small Red Train',
      image: 'assets/vander-Bharat.png',
      oldPrice: '450$',
      price: '100$'
    },
    {
      name: 'Dancing Talking Cactus',
      image: 'assets/Dancing-catacus.png',
      oldPrice: '150$',
      price: '46$'
    },
    {
      name: 'Gun Toy',
      image: 'assets/gun-toy.png',
      oldPrice: '450$',
      price: '100$'
    },
    {
      name: 'Dancing Talking Cactus',
      image: 'assets/cactus.png',
      oldPrice: '150$',
      price: '46$'
    },
    {
      name: 'Beautiful Old Airplane',
      image: 'assets/dracula-removebg-preview.png',
      oldPrice: '230$',
      price: '23$'
    },
    {
      name: 'Gun Toy',
      image: 'assets/gun-toy.png',
      oldPrice: '450$',
      price: '100$'
    },
    {
      name: 'Dancing Talking Cactus',
      image: 'assets/cactus.png',
      oldPrice: '150$',
      price: '46$'
    },
    {
      name: 'Small Red Train',
      image: 'assets/train-toy.png',
      oldPrice: '450$',
      price: '100$'
    },
  ];
  toyCategories = [
  { name: 'Dolls & Characters', image: 'assets/cute-doll.jpg' },
  { name: 'Toy Weapons', image: 'assets/gun-toy.png' },
  { name: 'Vehicles & Robotics', image: 'assets/van.jpg' },
  { name: 'Others', image: 'assets/gift.png' }
];

  constructor(private router: Router){}
  loginMain(){
    this.router.navigate(['/lovelyGiftCenter/login']);
  }
  registerMain(){
    this.router.navigate(['/lovelyGiftCenter/register']);
  }
  slideLeft(){
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' })
  }
    slideRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
