import { Component } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
  NgApexchartsModule,
  ApexStroke,
  ApexStates
} from "ng-apexcharts";

export type ChartOptions = {
  chart: ApexChart;
  colors: string[];
  series: ApexAxisChartSeries;
  stroke: ApexStroke;
  labels: string[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend?: ApexLegend;
  dataLabels?: ApexDataLabels;
  plotOptions?: ApexPlotOptions;
  states?: ApexStates;
};

@Component({
  selector: 'app-test-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './test-charts.component.html',
  styleUrl: './test-charts.component.scss'
})
export class TestChartsComponent {

  chartAreaSparkline1Options: ChartOptions = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true
      },
    },

    stroke: {
      curve: "smooth",
    },

    fill: {
      colors: ["#F8285A"],
      opacity: 1,
      type: "solid"
    },

    xaxis: {},

    yaxis: {},

    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],


    tooltip: {

    },



    series: [
      {
        name: "Net Profit",
        data: [30, 45, 32, 70, 40, 40, 40],
      }
    ],

    colors: ["#CB1C47"],

    title: {
      text: "Sales Statistics",
      offsetX: 0,
      style: {
        // fontSize: "24px",
        color: 'white'
      }
    },

    subtitle: {
      text: "Sales",
      offsetX: 0,
      style: {
        fontSize: "14px"
      }
    }
  };
}
