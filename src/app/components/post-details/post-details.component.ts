import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  postId!: number;
  post: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.getPost();
    });
  }

  getPost(): void {
    this.postsService.getPost(this.postId)
      .subscribe(post => this.post = post);
  }
}
