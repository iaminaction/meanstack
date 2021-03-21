import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

@Output()
notify : EventEmitter<Task> = new EventEmitter<Task>();

task : Task = new Task();

  constructor() { }

  ngOnInit(): void {
  }

  save()
  {
    this.notify.emit(this.task);
  }
  
  cancel()
  {
  this.notify.emit(null);
  }

}
