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
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'add-new-client',
        loadComponent: () =>
          import('../pages/add-new-client/add-new-client.component').then(
            (m) => m.AddNewClientComponent
          ),
        data: {
          title: 'Add New Client'
        }
      },
      {
        path: 'test',
        component: TestmeComponent,
      },
    ],
  },
];
