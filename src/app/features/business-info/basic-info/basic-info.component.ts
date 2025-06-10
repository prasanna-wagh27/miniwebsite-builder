import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-info',
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
})
export class BasicInfoComponent {

  basicInfo = {
    businessName: '',
    tagline: '',
    category: '',
    logoFile: null as File | null,
  };

  handleLogoUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    this.basicInfo.logoFile = input.files?.[0] ?? null;
  }

  submitForm() {
    console.log('Submitted:', this.basicInfo);
    // Placeholder for submission logic
  }
}
