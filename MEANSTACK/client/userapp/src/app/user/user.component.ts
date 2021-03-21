import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input()
userid : string = "";

user : User = new User();
sub1 : Subscription;
sub2 : Subscription;
displayFlag : boolean = false;
moreData: boolean = false;
isCompleted: boolean = false;

@Output()
notify : EventEmitter<string> = new EventEmitter<string>();
@Output()
notify2 : EventEmitter<string> = new EventEmitter<string>();

  constructor(private utils : UserUtilsService) { }

    ngOnInit(): void {
    this.sub1 = this.utils.getUserById(this.userid).
    subscribe(data => this.user = data)

  }

  ngOnDestroy(){
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

saveUser(){

this.utils.updateUser(this.user)
.subscribe( () => {
  alert("User Updated !");
} );

}

ngOnChanges()
{
  // alert("On Change child")
}

checkSelected() : string
{
  if(this.user == this.utils.getSelectedUser())
  {
  return 'orange'
  }else{
    return 'white'
  }
}

displayMore()
{
  this.displayFlag = !this.displayFlag;
}

delete(){
this.utils.deleteUser(this.user)
.subscribe( () => {
  alert("User Deleted !");
  this.notify2.emit(this.userid);
} );
}

checkTasks(): string {

if(this.user.tasks.length != 0){
  let task : Task = this.user.tasks.find(x => x.completed == false);
if(task == null){
  return 'green'
}else{
  return 'red'
}
}else{
  return 'white'
}

}

}
