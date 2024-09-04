import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { NavMenubarEndComponent } from "./nav-menubar-end/nav-menubar-end.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenubarModule,
    RippleModule,
    NgClass,
    RouterLink,
    NavSidebarComponent,
    ButtonModule,
    NavMenubarEndComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent  implements OnInit{
  items!: MenuItem[];
  sidebarVisible = signal(false);

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-objects-column',
        routerLink: '/'
      },
      {
        label: 'Widgets',
        icon: 'pi pi-star',
        routerLink: '/test'
      },
      {
        label: 'Add New Client',
        icon: 'pi pi-sparkles',
        routerLink: '/aa'
      },
      {
        label: 'Chat',
        icon: 'pi pi-send',
        items: [
          {
            label: 'Private Chat',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Group Chat',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Drawer Chat',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
        ],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Overview',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Projects',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Campaigns',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Documents',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
          {
            label: 'Connections',
            icon: 'pi pi-angle-double-right',
            // routerLink: '/'
          },
        ],
      },
    ];
  }

  openSidebar() {
    this.sidebarVisible.set(true);
  }
}
