import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menubar-end-user',
  standalone: true,
  imports: [
    MenuModule,
    RippleModule,
    ButtonModule,
    TagModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-menubar-end-user.component.html',
  styleUrl: './nav-menubar-end-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenubarEndUserComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'My Account',
        routerLink: '/account/overview'
      },
      {
        label: 'My Profile',
        routerLink: '/profile/overview'
      },
      {
        separator: true,
      },
      {
        label: 'Language',
        id: 'language',
      },
      {
        label: 'Account Settings',
        routerLink: '/account/settings',
        icon: 'pi pi-cog'
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out'
      },
    ];
  }
}
