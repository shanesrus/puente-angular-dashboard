import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataexportProtoComponent } from './dataexport-proto/dataexport-proto.component';

const routes: Routes = [
  { path: 'dataexport', component: DataexportProtoComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}