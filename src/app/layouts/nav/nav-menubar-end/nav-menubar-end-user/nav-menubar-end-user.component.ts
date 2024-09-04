import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-nav-menubar-end-user',
  standalone: true,
  imports: [
    MenuModule,
    RippleModule,
    ButtonModule,
    TagModule,
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
        label: 'My Profile',
      },
      {
        label: 'My Projects',
        badge: '3',
      },
      {
        label: 'My Subscription',
      },
      {
        label: 'My Statements',
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
        icon: 'pi pi-cog'
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out'
      },
    ];
  }
}
