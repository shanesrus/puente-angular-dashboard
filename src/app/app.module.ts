import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataexportProtoComponent } from './pages/dataexport-proto/dataexport-proto.component';
import { AppRoutingModule } from './/app-routing.module';
import { AnalysisComponent } from './pages/analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DataexportProtoComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
