import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

   rutas = [{
    path:'/home',
    name:'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path:'/contact',
    name: 'Contact'
  },
  {
    path:'/post',
    name: 'post'
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
