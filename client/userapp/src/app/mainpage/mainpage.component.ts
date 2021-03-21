import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdduserComponent } from '../adduser/adduser.component';
import { TaskspostsComponent } from '../tasksposts/tasksposts.component';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  users : User[] = [];
  allUsers: User[] = [];
  sub : Subscription;
  isCreate: boolean = false;
  searchPattern : string ;
  isPostsTasks: boolean = false;
  selectedUser : User = new User;
  constructor(private utils : UserUtilsService) { }

  ngOnInit(): void {

  this.getAllUsers();

  }

async getAllUsers(){
  this.users = await this.utils.getAllUsers().toPromise();
  this.allUsers = this.users;
}

  userDeleted(id: string){
    this.users = this.users.filter(x => x._id != id);
    if(this.selectedUser._id == id){
      this.isPostsTasks = false;
    }
  }

  userCreated(isCreated: boolean){

    if(isCreated){
      window.location.reload()
    }
    this.isCreate = false;  
    }

navigateToAdd(){
  this.isPostsTasks = false;
    this.isCreate = true;
    // this.choosedComponent = AdduserComponent;
}

ngOnDestroy(){
  this.sub.unsubscribe();
}

ngOnChanges()
{

}

setSelected(u : User)
{
// alert(u._id)
  if(u == this.selectedUser)
  {
    // alert("unselect")
    this.isPostsTasks = false;
    // this.utils.selectUser(new User());
    this.selectedUser = new User();
  }else{
    // alert("select")
    this.isPostsTasks = true;
    // this.utils.selectUser(u);
    this.selectedUser = u;
  }
 
}

checkSelected(id: string)
{
if(id === this.selectedUser._id){
  return 'orange';
}
else{
  return 'lightgray'
}
}

async filter( s: string){
  if(s.length == 0)
  {
    if(this.allUsers != null){
      this.users = this.allUsers;
    }
  // this.getAllUsers();
  }else
  {
    this.users = this.allUsers.filter(x => x.name.toLowerCase().includes(s))
    // this.users = await this.utils.filterUsers(s)
  }

}

}
