import { Component } from '@angular/core';
import { PostsComponent } from "../../components/posts/posts.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [PostsComponent]
})
export class HomeComponent {

}
