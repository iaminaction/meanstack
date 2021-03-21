import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

// @Input()
// userId : string

@Output()
notify : EventEmitter<Post> = new EventEmitter<Post>();

post : Post = new Post();

  constructor(private utils : UserUtilsService) { }

  ngOnInit(): void {
  }

save()
{
  this.notify.emit(this.post);
}

cancel()
{
this.notify.emit(null);
}

}
