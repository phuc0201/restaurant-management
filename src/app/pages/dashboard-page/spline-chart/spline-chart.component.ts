import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss']
})
export class SplineChartComponent {
  @ViewChild("splineChart") splineChart!: ChartComponent;
  chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "series1",
        data: [0, 0, 0, 0, 0, 3, 5]
      }
    ],
    chart: {
      height: 350,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-07-16T00:00:00.000Z",
        "2024-07-16T01:30:00.000Z",
        "2024-07-16T02:30:00.000Z",
        "2024-07-16T03:30:00.000Z",
        "2024-07-16T04:30:00.000Z",
        "2024-07-16T05:30:00.000Z",
        "2024-07-16T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  };

  // generateData(baseval: any, count: any, yrange: any) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }

  constructor() {
  }
}
