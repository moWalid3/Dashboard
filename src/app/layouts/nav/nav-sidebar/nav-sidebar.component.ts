import { Component, input, model } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    StyleClassModule,
    RouterLink,
    RouterLinkActive,
    RippleModule,
    NgScrollbarModule
  ],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
  items = input.required<MenuItem[]>();
  sidebarVisible = model<boolean>(false);
}
