import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  imports: [],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {

  formData = {
    businessName: '',
    tagline: '',
    category: '',
    logoFile: null as File | null,
  };

  handleLogoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    this.formData.logoFile = input.files?.[0] ?? null;
  }

  submitForm() {
    console.log('Submitted:', this.formData);
    // Placeholder for submission logic
  }
}
