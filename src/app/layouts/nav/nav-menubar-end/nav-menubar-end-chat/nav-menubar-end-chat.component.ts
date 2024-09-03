import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { ChatHeaderComponent } from '../../../../components/chat/chat-header/chat-header.component';
import { ChatBodyComponent } from '../../../../components/chat/chat-body/chat-body.component';
import { ChatFooterComponent } from '../../../../components/chat/chat-footer/chat-footer.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-nav-menubar-end-chat',
  standalone: true,
  imports: [
    SidebarModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    ChatHeaderComponent,
    ChatBodyComponent,
    ChatFooterComponent,
    NgScrollbarModule
  ],
  templateUrl: './nav-menubar-end-chat.component.html',
  styleUrl: './nav-menubar-end-chat.component.scss',
})
export class NavMenubarEndChatComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(event: Event): void {
    this.sidebarRef.close(event);
  }

  sidebarVisible: boolean = false;
}
