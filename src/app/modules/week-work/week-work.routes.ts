import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TaskComponent } from './task/task.component';

const WeekWorkRoutes: Routes = [
    { path:'task',component: TaskComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(WeekWorkRoutes) ],
    exports: [RouterModule]
})


export class  WeekWorkRoutingModule { }