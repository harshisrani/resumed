import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './layout/mainpage/mainpage.component';
import {ContactmeComponent} from './component/contactme/contactme.component';
import {TechnologyComponent} from './component/technology/technology.component';
import {AboutComponent} from './component/about/about.component';

export const appRoutes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'contactme', component: ContactmeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'technology', component: TechnologyComponent, pathMatch: 'full'},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const Routing = RouterModule.forRoot(appRoutes);
