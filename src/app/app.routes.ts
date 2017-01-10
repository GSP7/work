
import { LayoutComponent } from './layout/layout.component';
import * as page from './pages/index';

const routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component: page.TestRouteComponent},
    {path:'**',component: page.TestRouteComponent}
]

export default routes;