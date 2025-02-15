import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'info', component: InfoComponent}
];
