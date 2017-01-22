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
  bgImgUrl:string  = '';
  enableBgImg:boolean = true;

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

  ChangeSidebarBgImg(img){
    this.bgImgUrl = img;
    console.log(img);
  }

  UseBgImg(isUsebgImg){
    this.enableBgImg = isUsebgImg;
  }
  ngOnInit(){
     $.material.init();

     let isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

     if (isWindows && !$('body').hasClass('sidebar-mini')){
          // if we are on windows OS we activate the perfectScrollbar function
          $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

          $('html').addClass('perfect-scrollbar-on');
      } else {
          $('html').addClass('perfect-scrollbar-off');
      }

  }
}
