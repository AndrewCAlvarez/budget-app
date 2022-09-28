import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

// Components
import { FinancialEventsComponent } from './components/financial-events/financial-events.component';
import { FinancialEventFormComponent } from './components/financial-event-form/financial-event-form.component';
import { FinancialEventDetailsComponent } from './components/financial-event-details/financial-event-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ChartComponent } from './components/chart/chart.component';
import { SearchComponent } from './components/search/search.component';

// Mock financial event data import
// TODO: Remove once real data is accessed via api
// import { financialEvents } from 'src/assets/financial-events';
// Could be used as part of demo capability

@NgModule({
  declarations: [
    AppComponent,
    FinancialEventsComponent,
    FinancialEventFormComponent,
    FinancialEventDetailsComponent,
    DashboardComponent,
    SignInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    SummaryComponent,
    ChartComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
