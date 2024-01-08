import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DictationComponent } from './dashboard/dictation/dictation.component';
import { HelpComponent } from './nav-bar/help/help.component';
import { InboxComponent } from './nav-bar/inbox/inbox.component';
import { LoginComponent } from './nav-bar/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'dictation', component: DictationComponent},
	{path: 'inbox', component: InboxComponent},
	{path: 'help', component: HelpComponent},
	{path: 'login', component: LoginComponent},

	{path: '**', component: PageNotFoundComponent}

];
