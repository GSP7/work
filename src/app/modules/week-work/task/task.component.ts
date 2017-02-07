import { Component,ViewChild, OnInit,AfterViewInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { DataTableDirective } from '../../../directive/datatables.directive';

import {WorkService} from '../../../services/work.service';
import * as moment from 'moment';
declare var $:any;

@Component({
  selector: 'app-task',
  providers: [WorkService],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TaskComponent implements OnInit,AfterViewInit {

  @ViewChild(DataTableDirective)
  private datatableEl: DataTableDirective;

   dtOptions: any = {};
   currentRow:any = {
      "category": '',
      "workdate":moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      "project":"GSP7",
      "worktimes": 0,
      "content":""
   };

   

  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private workSer: WorkService
  ) { 
	  

  }

  ngOnInit(){
     $.material.init();
     // We put modals out of wrapper to working properly
    $('.modal').appendTo("body");
    //  this.route.url.subscribe(url=> console.log(url));
    var _data = this.workSer.getData().data;
    this.dtOptions = {
      responsive:true,
      select: 'single', // 单选
     
      data: _data,
      columns: [{
        title: 'ID',
        data: 'id',
        width:80
      }, {
        title: '工作类别',
        data: 'category',
        width: 160
      }, {
        title: '项目',
        data: 'project',
        width: 160
      },{
        title:'工作时间',
        data:'workdate',
        width: 180
      },{
        title:'工时',
        data:'worktimes',
        width: 120
      },{
        title:'工作内容',
        data:'content'
      }],
      language:{
          "sProcessing":   "处理中...",
          "sLengthMenu":   "显示 _MENU_ 项结果",
          "sZeroRecords":  "没有匹配结果",
          "sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
          "sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
          "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
          "sInfoPostFix":  "",
          "sSearch":       "搜索:",
          "sUrl":          "",
          "sEmptyTable":     "表中数据为空",
          "sLoadingRecords": "载入中...",
          "sInfoThousands":  ",",
          "oPaginate": {
              "sFirst":    "首页",
              "sPrevious": "上页",
              "sNext":     "下页",
              "sLast":     "末页"
          },
          "oAria": {
              "sSortAscending":  ": 以升序排列此列",
              "sSortDescending": ": 以降序排列此列"
          }
      }
 
    }

    //  console.log(this.router.url);
    /* Default class modification */
  }

  ngAfterViewInit(){
      let self = this;
      this.datatableEl.dtInstance.then(dt =>{
        $('.card .material-datatables label').addClass('form-group');
        dt.on('select', function(e,dt,type,indexes){
          if(type == 'row'){
            self.currentRow = dt.rows( indexes ).data()[0];
            console.log(self.currentRow);
          }
        }).on('deselect', function(){
          self.currentRow = null;
        })
      });
  }

  canShowModal(){
    return this.currentRow==null;
  }

}
