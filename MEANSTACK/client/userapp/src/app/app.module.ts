import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserComponent } from './user/user.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AddpostComponent } from './addpost/addpost.component';
import { TaskComponent } from './task/task.component';
import { PostComponent } from './post/post.component';
import { UserspipePipe } from './userspipe.pipe';
import { AdduserComponent } from './adduser/adduser.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskspostsComponent } from './tasksposts/tasksposts.component';

const appRoutes : Routes = [
  {path : "", component: MainpageComponent}
//   {path : "movie/:id", component: MovieComponent},
//   {path : "add", component: AddmovieComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserComponent,
    AddtaskComponent,
    AddpostComponent,
    TaskComponent,
    PostComponent,
    UserspipePipe,
    AdduserComponent,
    TaskspostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    // NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatCardModule,
    MatButtonModule,

  ],
  // entryComponents[TaskspostsComponent, AdduserComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
