import { Component, OnInit, Input,ElementRef,AfterViewInit } from '@angular/core';
import {RouterModule, Routes, ActivatedRoute,Router,NavigationEnd} from '@angular/router';
import menuData from '../../../data/menus';
import * as _ from 'lodash';
import 'rxjs/add/operator/pairwise';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit,AfterViewInit {
    menuItems:Array<any>;
    _min:boolean = false;
    currUrl:string = '';
    nav:any;
    expanded:boolean = false;

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

    constructor(el:ElementRef,
        private route: ActivatedRoute,
        private router: Router) { 
            this.menuItems = menuData;
            this.nav = el.nativeElement;
           // console.log(this.route);

            this.router.events.pairwise().subscribe((e) => {
                console.log(e[1].url);
                if(e[1] instanceof NavigationEnd){
                     this.currUrl = e[1].url;
                }
            });
    }

    ngOnInit() {
        //$(this.nav).find('.sidebar .sidebar-wrapper').perfectScrollbar();
        
        //console.log(this.router.url);
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

    setExpanded(menus:Array<any>){
        if(menus.length > 0){
            let link = this.currUrl;
            return _.size(_.find(menus,function(item){
                return item.link === link;
            })) > 0;
        }
        return false;
    }
}
