import { Component, OnInit } from '@angular/core';
import { GtasksEditComponent } from '../gtasks-edit/gtasks-edit.component';

declare var $: any;
@Component({
  selector: 'app-gtasks-list',
  templateUrl: './gtasks-list.component.html',
  styleUrls: ['./gtasks-list.component.css']
})
export class GtasksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#treelist').kendoTreeList({
        dataSource: {
          transport: {
            read: {
              url: '',
              dataType: 'jsonp'
            }
          },
          schema: {
            model: {
              id: 'ID',
              parentId: 'ParentID',
              fields: {
                ID: { field: 'ID', type: 'string' },
                ParentID: { field: 'ParentID', type: 'string' }
              },
              expanded: true
            }
          }
        },
        height: 540,
        filterable: false,
        sortable: true,
        columns: [
          { field: 'Subject', title: '主题', width: 280 },
          { field: 'PlanFinishDate', title: '计划完成时间', width: 140 },
          { field: 'Owner', title: '负责人', width: 140 },
          { field: 'State', title: '状况', width: 140 }
        ]
      });
    });
  }

  Refresh() {
    let treeList = $('#treelist').data('kendoTreeList');
    if (treeList) 
    {
      treeList.refresh();
    }
  }
}
