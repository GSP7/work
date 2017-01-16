import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as page from './pages/index';

const routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component: page.TestRouteComponent},
    {path: 'week', loadChildren: 'app/modules/week-work/week-work.module#WeekWorkModule' },
    {path:'**',component: page.TestRouteComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }