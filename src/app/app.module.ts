import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FixedPluginComponent } from './layout/fixed-plugin/fixed-plugin.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestRouteComponent } from './pages/test-route/test-route.component';

//import appRoutes from './app.routes';
//import { LayoutComponent } from './layout/layout.component';
import * as page from './pages/index';

const appRoutes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component: page.TestRouteComponent},

    // not found jump to ...
    {path:'**',component: page.TestRouteComponent}
]


@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FixedPluginComponent,
    FooterComponent,
    TestRouteComponent
  //  LayoutComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
