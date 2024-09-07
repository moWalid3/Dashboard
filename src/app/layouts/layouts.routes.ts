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
        path: 'test',
        component: TestmeComponent,
      },
    ],
  },
];
