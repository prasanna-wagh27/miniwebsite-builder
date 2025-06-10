import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/components/header/header.component";
import { ContactInfoComponent } from "./features/business-info/contact-info/contact-info.component";
import { FooterComponent } from "./layout/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, HeaderComponent, ContactInfoComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miniwebsite-builder';
}
