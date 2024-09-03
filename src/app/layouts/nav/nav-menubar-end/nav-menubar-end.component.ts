import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { NavMenubarEndUserComponent } from "./nav-menubar-end-user/nav-menubar-end-user.component";
import { NavMenubarEndThemeComponent } from "./nav-menubar-end-theme/nav-menubar-end-theme.component";
import { NavMenubarEndChatComponent } from "./nav-menubar-end-chat/nav-menubar-end-chat.component";
import { NavMenubarEndNotificationsComponent } from "./nav-menubar-end-notifications/nav-menubar-end-notifications.component";
import { NavMenubarEndSearchComponent } from "./nav-menubar-end-search/nav-menubar-end-search.component";

@Component({
  selector: 'app-nav-menubar-end',
  standalone: true,
  imports: [
    MenubarModule,
    CommonModule,
    MenuModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
    ButtonModule,
    NavMenubarEndUserComponent,
    NavMenubarEndThemeComponent,
    NavMenubarEndChatComponent,
    NavMenubarEndNotificationsComponent,
    NavMenubarEndSearchComponent
],
  templateUrl: './nav-menubar-end.component.html',
  styleUrl: './nav-menubar-end.component.scss',
})
export class NavMenubarEndComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}
