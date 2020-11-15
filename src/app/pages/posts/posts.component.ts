import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts:any;

  constructor(
    public _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){

    this.posts = this._dataService.gePosts();

}



escucharClick(id:number) {
  console.log('click en', id );
}

}
