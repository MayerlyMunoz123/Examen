import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.loadPosts();
  }
datos :any

loadPosts(){
  this.postsService.loadPosts().subscribe(data => {
    this.datos = data;
    console.log(this.datos);
  });
  
}
}
