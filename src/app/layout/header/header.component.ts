import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   @Input() sidebar_mini_active:boolean;
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

  constructor() { 
    this.sidebar_mini_active = false;
  }

  ngOnInit() {
  }

}
