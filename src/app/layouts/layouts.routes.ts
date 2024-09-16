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
        path: 'widgets',
        loadComponent: () => import('../pages/widgets/widgets.component').then(m => m.WidgetsComponent),
        data: {
          title: 'widgets'
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
        path: 'chat',
        children: [
          {
            path: 'private-chat',
            loadComponent : () => import('../pages/chats/private-chat/private-chat.component').then(m => m.PrivateChatComponent),
            data: {
              title: 'Private Chat'
            }
          },
          {
            path: 'group-chat',
            loadComponent : () => import('../pages/chats/group-chat/group-chat.component').then(m => m.GroupChatComponent),
            data: {
              title: 'Group Chat'
            }
          },
          {
            path: 'my-contacts',
            loadComponent : () => import('../pages/chats/my-contacts-list/my-contacts-list.component').then(m => m.MyContactsListComponent),
            data: {
              title: 'My Contacts'
            }
          }
        ]
      },
      {
        path: 'profile',
        loadComponent: () => import('../pages/profile/profile.component').then(m => m.ProfileComponent),
        children: [
          {
            path: 'overview',
            loadComponent: () => import('../pages/profile/profile-overview/profile-overview.component').then(m => m.ProfileOverviewComponent),
            data: {
              title: 'Overview'
            }
          },
          {
            path: 'projects',
            loadComponent: () => import('../pages/profile/profile-projects/profile-projects.component').then(m => m.ProfileProjectsComponent),
            data: {
              title: 'Projects'
            }
          },
          {
            path: 'campaigns',
            loadComponent: () => import('../pages/profile/profile-campaigns/profile-campaigns.component').then(m => m.ProfileCampaignsComponent),
            data: {
              title: 'Campaigns'
            }
          },
          {
            path: 'documents',
            loadComponent: () => import('../pages/profile/profile-documents/profile-documents.component').then(m => m.ProfileDocumentsComponent),
            data: {
              title: 'Documents'
            }
          },
        ]
      },
      {
        path: 'test',
        component: TestmeComponent,
      },
    ],
  },
];
