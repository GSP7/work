import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

import { WeekWorkRoutingModule } from './week-work.routes';

@NgModule({
  imports: [
    CommonModule, WeekWorkRoutingModule
  ],
  declarations: [TaskComponent]
})
export class WeekWorkModule { }
