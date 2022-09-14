// No need to add paths in here. That can be found and added in app.module.ts

import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialEventDetailsComponent } from './financial-event-details/financial-event-details.component';
import { FinancialEventFormComponent } from './financial-event-form/financial-event-form.component';
import { FinancialEventsComponent } from './financial-events/financial-events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'financial-events', component: FinancialEventsComponent },
  { path: 'events/:id', component: FinancialEventDetailsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'add', component: FinancialEventFormComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
