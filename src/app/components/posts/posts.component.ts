import { Component } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: any[] | undefined;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts.slice(0, 10));
  }

  showPostDetails(postId: number): void {
    this.router.navigate(['/post', postId]);
  }
}
