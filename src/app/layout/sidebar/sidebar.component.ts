import { Component, OnInit, Input,ElementRef,AfterViewInit } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import menuData from '../../../data/menus';
declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit,AfterViewInit {
    menuItems:Array<any>;
    _min:boolean = false;

    nav:any;

    @Input() bgColor:string;
    @Input() menuActiveColor:string;
    @Input() bgImgUrl:string;
    @Input() enableBgImg:boolean;
    @Input() 
    set sidebarMin(val:boolean){
        this._min = val;
        if(val){
            $(this.nav).find('div.collapse').collapse('hide');
        }
    }
    get sidebarMin(){
        return this._min;
    }

    constructor(el:ElementRef) { 
        this.menuItems = menuData;
        this.nav = el.nativeElement;

        console.log(JSON.stringify(this.menuItems));
    }

    ngOnInit() {
        //$(this.nav).find('.sidebar .sidebar-wrapper').perfectScrollbar();
        

    }

    ngAfterViewInit(){
        var $collapse = $(this.nav).find('.sidebar .collapse');
        var self = this;
        $collapse.on('show.bs.collapse',function(){
            if($(window).width() > 991 && self.sidebarMin){
                return false;
            } else{
                return true;
            }
        })
    }

    setSubmenuHeight() {
        if(this.sidebarMin){
            return { 'height':'auto'};
        }
    }

   
}
