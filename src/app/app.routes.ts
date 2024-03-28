import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

export const routes: Routes = [
    { path: '', title: 'Home Page', component: HomeComponent },
    { path: 'post/:id', component: PostDetailsComponent }
];
