import { Component, OnInit,Output,EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-fixed-plugin',
  templateUrl: './fixed-plugin.component.html',
  styleUrls: ['./fixed-plugin.component.css']
})
export class FixedPluginComponent implements OnInit {
sidebar_mini_active:boolean = false;
  constructor() { }

   @Output() onChangeSidebar = new EventEmitter();

  changeSidebar(){
    this.sidebar_mini_active = !this.sidebar_mini_active;
   
    if(this.sidebar_mini_active){
      $('body').addClass('sidebar-mini');
    }else{
      $('body').removeClass('sidebar-mini');
    }

     this.onChangeSidebar.emit(this.sidebar_mini_active);
   
  }

  ngOnInit() {
  }

  stopPropagation(){
    this.changeSidebar();
    event.stopPropagation();
  }
  
}
