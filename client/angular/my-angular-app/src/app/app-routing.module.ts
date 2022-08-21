// No need to add paths in here. That can be found and added in app.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
