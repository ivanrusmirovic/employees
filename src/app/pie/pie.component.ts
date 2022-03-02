import { Component, Input, OnChanges } from '@angular/core';
import * as apex from "ng-apexcharts";
import {PieData} from '../models/pieModel';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges {

  @Input() pieData!: PieData[];
 
  series!: apex.ApexNonAxisChartSeries;
  chart!: apex.ApexChart;
  title!: apex.ApexTitleSubtitle;
  labels!: string[];

  ngOnChanges(): void {

  this.series = this.pieData.map(data => data.totalTime);
  
  this.labels = this.pieData.map(data => data.employeeName);
  
  this.title = {
    text: "Pie Chart"
  }
  
  this.chart = {
    height: 380,
    type: "pie"
  }
}
  
}
