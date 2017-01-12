import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  sidebarBgColor:string = "white";
  menuActiveColor:string = "rose";
  isCollapse: boolean = false;

  collapseSidebar(collapse) {
    this.isCollapse = collapse;
    console.log("COLLAPSE:" + collapse);
  }

  ChangeSidebarBgColor(bgcolor){
    this.sidebarBgColor = bgcolor;
  }

  ChangeSidebarMenuColor(c){
    this.menuActiveColor = c;
  }

  ngOnInit(){
     $.material.init();
  }
}
