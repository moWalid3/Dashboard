import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FilterOptionsPopupComponent } from "../filter-options-popup/filter-options-popup.component";
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [ButtonModule, FilterOptionsPopupComponent, ProgressBarModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex-column md:flex-row'
  }
})
export class UserHeaderComponent {

}
