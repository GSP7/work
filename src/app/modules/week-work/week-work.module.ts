import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekWorkRoutingModule } from './week-work.routes';
import { DataTableDirective } from '../../directive/datatables.directive';

import { TaskComponent } from './task/task.component';



@NgModule({
 
  imports: [
    CommonModule, WeekWorkRoutingModule
  ],
  declarations: [DataTableDirective,TaskComponent]
})
export class WeekWorkModule { }
