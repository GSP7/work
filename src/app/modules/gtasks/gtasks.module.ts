import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtasksListComponent } from './gtasks-list/gtasks-list.component';

import { GTasksRoutingModule } from './gtasks.routes';
import { GtasksEditComponent } from './gtasks-edit/gtasks-edit.component';

@NgModule({
  imports: [
    CommonModule,
    GTasksRoutingModule
  ],
  declarations: [GtasksListComponent, GtasksEditComponent]
})
export class GTasksModule { }
