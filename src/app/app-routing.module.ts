import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataexportProtoComponent } from './pages/dataexport-proto/dataexport-proto.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';

const routes: Routes = [
  { path: 'dataexport', component: DataexportProtoComponent },
  { path: 'analysis', component: AnalysisComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}