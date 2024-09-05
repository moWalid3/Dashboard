import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { StepAccountTypeComponent } from "./step-account-type/step-account-type.component";

@Component({
  selector: 'app-add-new-client',
  standalone: true,
  imports: [ButtonModule, StepperModule, StepAccountTypeComponent],
  templateUrl: './add-new-client.component.html',
  styleUrl: './add-new-client.component.scss',
  host: {
    // 'class': ''
  }
})
export class AddNewClientComponent {

}
