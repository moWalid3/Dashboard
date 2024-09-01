import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TestmeComponent } from '../testme/testme.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'test',
        component: TestmeComponent
      }
    ]
  },
];
