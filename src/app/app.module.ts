import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeetableComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
