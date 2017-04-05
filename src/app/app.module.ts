import { BrowserModule  } from '@angular/platform-browser';
import { NgModule       } from '@angular/core';
import { FormsModule    } from '@angular/forms';
import { HttpModule     } from '@angular/http';
import { AppComponent   } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { RouterModule   } from '@angular/router';
import { PostsService   } from './posts.service';
import { TestformComponent } from './testform/testform.component';

// Define the routes
// Not the best way, but following tutorial
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'testform',
    component: TestformComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
