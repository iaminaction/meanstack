import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { Task } from '../task';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-tasksposts',
  templateUrl: './tasksposts.component.html',
  styleUrls: ['./tasksposts.component.css']
})
export class TaskspostsComponent implements OnInit {
@Input()
  user: User ;

  posts: Post[] = []
  tasks: Task[] = []
  isAddPost : boolean = false;
  isAddTask : boolean = false;
  sub : Subscription

  constructor(private utils: UserUtilsService) { }

  ngOnInit(): void {
    
    // this.user = this.utils.getSelectedUser();
    this.posts = this.user.posts;
    this.tasks = this.user.tasks;
  }

ngOnchanges()
{
  alert("change in taskposts");
}

addPostToggle()
{
  this.isAddPost = true;
}

getNewPost(p: Post)
{

if(p != null){
  let newPost : Post = p;
  newPost.id = this.user.posts.length + 1;
  this.user.posts.push(newPost);
  this.utils.updateUser(this.user)
  .subscribe( () =>
 { 
  // this.isAddPost = false;
 })
}
this.isAddPost = false;
}

getNewTask(t: Task)
{
if(t != null){
let newTask : Task = t;
newTask.id = this.user.tasks.length + 1;
newTask.completed = false;
this.user.tasks.push(newTask);
this.sub = this.utils.updateUser(this.user)
.subscribe( () =>{ this.isAddTask = false; })
}
this.isAddTask = false;
}

addTaskToggle()
{
  this.isAddTask = true;
}

updateTask(t: Task){
this.sub = this.utils.updateUser(this.user)
.subscribe( () =>{})
}

ngOnDestroy()
{
  this.sub.unsubscribe();
}

}
