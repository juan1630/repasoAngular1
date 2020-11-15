import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() item: any;
  @Output() clickPost = new  EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.item.id);
  }

}
