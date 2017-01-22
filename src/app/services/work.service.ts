import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class WorkService {

  constructor() { }

  GetRandomNum(Min,Max){   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
  } 

  getData(){
    let _data:any = {};
    _data["data"] = [];

    let work_category = ["开发","会议","培训","其他"];

    for(let i=0;i<100;i++){
      let obj = {
        "id": i+1,
        "category": work_category[this.GetRandomNum(0,work_category.length-1)],
        "workdate":moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        "project":"GSP7",
        "worktimes": this.GetRandomNum(1,3),
        "content":""
      }
      _data.data.push(obj);
    }

    console.log(_data);
    return _data;
  }
}
