import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FinancialEventsComponent } from './financial-events/financial-events.component';
import { FinancialEventFormComponent } from './financial-event-form/financial-event-form.component';
import { FinancialEventDetailsComponent } from './financial-event-details/financial-event-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { financialEvents } from 'src/assets/financial-events';

@NgModule({
  declarations: [
    AppComponent,
    FinancialEventsComponent,
    FinancialEventFormComponent,
    FinancialEventDetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: FinancialEventsComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
