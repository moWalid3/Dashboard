import { Component } from '@angular/core';
import { SalesStatisticsChartComponent } from "./sales-statistics-chart/sales-statistics-chart.component";
import { TestChartsComponent } from "../../components/test-charts/test-charts.component";
import { DashboardActivitiesComponent } from "./dashboard-activities/dashboard-activities.component";
import { DashboardReportsAndSalesChartComponent } from "./dashboard-reports-and-sales-chart/dashboard-reports-and-sales-chart.component";
import { DashboardTodoComponent } from "./dashboard-todo/dashboard-todo.component";
import { DashboardMembersComponent } from "./dashboard-members/dashboard-members.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SalesStatisticsChartComponent, TestChartsComponent, DashboardActivitiesComponent, DashboardReportsAndSalesChartComponent, DashboardTodoComponent, DashboardMembersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
