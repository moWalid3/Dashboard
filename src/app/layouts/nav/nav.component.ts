import { Component, OnInit, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { NgClass } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
//

import { ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { RouterLink, RouterLinkActive } from '@angular/router';


//
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    NgClass,
    RouterLink,
    //
    SidebarModule, ButtonModule, StyleClassModule
    //
],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent  implements OnInit{
  items!: MenuItem[];

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

  sidebarVisible = signal(false);

  openSidebar() {
    this.sidebarVisible.set(true);
  }
}
