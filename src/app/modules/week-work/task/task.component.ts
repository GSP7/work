import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(){
     $.material.init();
  }

}
