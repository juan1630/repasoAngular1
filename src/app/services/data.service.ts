import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public _http: HttpClient
  ) { }


   gePosts(){
     // el operador tap ejecuta una accion cuando se optine un mensaje
     return this._http.get('https://jsonplaceholder.typicode.com/posts')
     .pipe(  tap( post => console.log(post)))
   }

  }
