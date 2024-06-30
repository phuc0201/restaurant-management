import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent {
  @ViewChild("circleChart") chart!: ChartComponent;
  chartOptions: Partial<ChartOptions> = {
    series: [70],
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%"
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: '#888',
            fontSize: '15px'
          },
          value: {
            color: '#111',
            fontSize: '15px',
            show: true,
          }
        }
      },
    },
    fill: {
      colors: ['#ed6d9f']
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Total order completed"]
  };
}
