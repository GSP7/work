import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GtasksListComponent } from './gtasks-list/gtasks-list.component';
import { GtasksEditComponent } from './gtasks-edit/gtasks-edit.component';

const GTasksRoutes: Routes = [
    { path: 'gtaskslist', component: GtasksListComponent },
    { path: 'gtasksedit', component: GtasksEditComponent }
]

@NgModule({
    imports: [RouterModule.forChild(GTasksRoutes)],
    exports: [RouterModule]
})


export class GTasksRoutingModule { }