import { Component,ViewChild, OnInit,AfterViewInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { DataTableDirective } from '../../../directive/datatables.directive';

import {SweetAlertService} from '../../../services/sweetalert.service';
import {WorkService} from '../../../services/work.service';
import * as moment from 'moment';
declare var $:any;

@Component({
  selector: 'app-task',
  providers: [WorkService,SweetAlertService],
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
   dt:any;
   

  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private workSer: WorkService,
   private sweetalert:SweetAlertService
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
      select:{
        style:'single',
        className:'selectedRow'
      }, // 单选
     
      data: _data,
      columns: [{
        title: 'ID',
        data: 'id',
        width:80
      }, {
        title: '工作类别',
        data: 'category',
        width: 160,
        "defaultContent": "<i>Not set</i>"
      }, {
        title: '项目',
        data: 'project',
        width: 160,
        "defaultContent": "<i>Not set</i>"
      },{
        title:'工作时间',
        data:'workdate',
        width: 180,
        "defaultContent": "<i>Not set</i>"
      },{
        title:'工时',
        data:'worktimes',
        width: 120,
        "defaultContent": "<i>Not set</i>"
      },{
        title:'工作内容',
        data:'content',"defaultContent": "<i>Not set</i>"
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
        self.dt = dt;
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

  addNew(){
    let self = this;
    self.currentRow = {};

    $('#infoModal').modal('show');
  }

  save(){
    if(this.currentRow.id){
      //console.log(this.dt.row());
      //var rowData = this.dt.row().data();
      this.dt.row('.selectedRow').data(this.currentRow).draw(false);
    }else{
      let id =  this.dt.rows().data().length + 1;
      this.currentRow.id = id;
      this.dt.row.add(this.currentRow).draw(false);
      this.dt.page('last').draw('page');
      this.dt.row("tr:contains("+id+")").select();
     
    }
   
    $('#infoModal').modal('hide');
       
  }

  delRow(){
    let self = this;
    this.sweetalert.question({
        title:'你确认要执行删除操作吗？',
        text: "删除的后数据将不可恢复!请谨慎操作。",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: '删除它',
        cancelButtonText:'取消',
        buttonsStyling: false
    }).then(function(){
        self.dt.row().remove().draw();
        self.sweetalert.success({
                    title: '删除成功!',
                    text: '',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false,
                    confirmButtonText:' 确 定 '
        })
    });
  }
}
