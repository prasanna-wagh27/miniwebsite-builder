import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from "../../../shared/components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule, FormsModule, ProgressBarComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
 contactInfo = {
    phoneNumber: '',
    email: '',
    whatsapp: '',
    social: '',
  };



  submitForm() {
    console.log('Submitted:', this.contactInfo);
    // Placeholder for submission logic
  }
}
