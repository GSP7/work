import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeekWorkRoutingModule } from './week-work.routes';
import { DataTableDirective } from '../../directive/datatables.directive';

import { TaskComponent } from './task/task.component';



@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    WeekWorkRoutingModule
  ],
  declarations: [DataTableDirective,TaskComponent]
})
export class WeekWorkModule { }
