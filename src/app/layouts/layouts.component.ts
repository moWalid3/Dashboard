import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutsComponent {

}
