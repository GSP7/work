import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-fixed-plugin',
  templateUrl: './fixed-plugin.component.html',
  styleUrls: ['./fixed-plugin.component.css']
})
export class FixedPluginComponent implements OnInit {

	colors:string[] = [ 'purple','blue','green','orange','red','rose' ];
	sidebar_mini_active:boolean = false;
	bgImgs:string[] = [];
	currentBgimg:string = 'sidebar-1.jpg';
	constructor() { 
		this.bgImgs = this.buildBgimgs();
	}

	@Input() IsMini:boolean = false;
	@Input() userBgImg:boolean = true;
	// 侧边栏背景色
	@Input() currentBgColor:string = 'white';
	@Input() currentMenuColor:string = 'rose';

   	@Output() onChangeSidebar = new EventEmitter();
	@Output() onChangeSidebarBgColor = new EventEmitter();
	@Output() onChangeSidebarMenuColor = new EventEmitter();
	@Output() onChangeSidebarBgImg = new EventEmitter();
	@Output() onUseBgImg = new EventEmitter();
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
		event.stopPropagation();
	}

	toggleSidebar($event){
		let isMini = $event.checked;
		if(isMini){
      		$('body').addClass('sidebar-mini');
		}else{
			$('body').removeClass('sidebar-mini');
		}

		this.onChangeSidebar.emit(isMini);
		console.log("sidebar-Mini:"+isMini);
	}  	

	changeBgColor(bgcolor){
		this.currentBgColor = bgcolor;
		this.onChangeSidebarBgColor.emit(bgcolor);
	}

	setClass(bgcolor){
		let cls = {
			badge:true,
			filter:true, 
			"badge-white":true,
			active: this.currentBgColor == bgcolor
		}

		return cls;
	}

	changeMenuColor(color){
		this.currentMenuColor = color;
		this.onChangeSidebarMenuColor.emit(color);
		console.log("Text Color :"+color);
	}

	buildBgimgs(){
		let imgs = [];
		for(let i=0;i<4;i++){
			imgs.push("sidebar-"+(i+1)+".jpg");
		}

		return imgs;
	}

	changeBgImg(img){
		this.currentBgimg = img;
		this.onChangeSidebarBgImg.emit(img);
		event.stopPropagation();
	}

	toggleBgImg($el){
		let enableBgImg = $el.checked;
		this.onUseBgImg.emit(enableBgImg);
	}
}
