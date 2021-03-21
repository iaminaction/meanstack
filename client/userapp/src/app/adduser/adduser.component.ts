import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

user : User = new User()
sub : Subscription
isHide: boolean = true;

@Output()
userCreated : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private utils: UserUtilsService) { 

    }

  ngOnInit(): void {
  }

save()
{
 this.sub = this.utils.addUser(this.user)
 .subscribe( () =>
 {
 alert(" User Created !");
 this.destroyComp(true);
 })

}

cancel()
{
  this.destroyComp(false);
}

destroyComp(isCreated : boolean)
{
this.userCreated.emit(isCreated);
}

}
