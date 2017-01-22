import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gtasks-edit',
  templateUrl: './gtasks-edit.component.html',
  styleUrls: ['./gtasks-edit.component.css']
})
export class GtasksEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').appendTo('body');
    });
  }

}
