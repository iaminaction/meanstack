import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

@Input()
task: Task = new Task();

@Output()
notify : EventEmitter<Task> = new EventEmitter<Task>();

  constructor( ) { }

  ngOnInit(): void {

  }

  complete(){
    this.task.completed = true;
    this.notify.emit(this.task);
  }

}
