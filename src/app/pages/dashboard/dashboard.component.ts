import { Component } from '@angular/core';
import { SalesStatisticsChartComponent } from "./sales-statistics-chart/sales-statistics-chart.component";
import { TestChartsComponent } from "../../components/test-charts/test-charts.component";
import { DashboardActivitiesComponent } from "./dashboard-activities/dashboard-activities.component";
import { DashboardReportsAndSalesChartComponent } from "./dashboard-reports-and-sales-chart/dashboard-reports-and-sales-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SalesStatisticsChartComponent, TestChartsComponent, DashboardActivitiesComponent, DashboardReportsAndSalesChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
