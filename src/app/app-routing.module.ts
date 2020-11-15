import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const ROUTES: Routes = [
  {path: 'home', component : HomeComponent,},
  {path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // lazy load
  // hace que la aplicacion sea menos pesada
  {  path: 'post', loadChildren:() => import('./pages/posts/posts.module').then( m => m.PostsModule ) },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
