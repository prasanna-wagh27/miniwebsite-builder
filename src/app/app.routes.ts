import { Routes } from '@angular/router';
import { BasicInfoComponent } from './features/business-info/basic-info/basic-info.component';
import { ContactInfoComponent } from './features/business-info/contact-info/contact-info.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';

export const routes: Routes = [

    {
      path: '', component:ProgressBarComponent
    },
    { 
      path: 'dashboard/basic-info', component:BasicInfoComponent
    },
    {
      path: 'dashboard/contact-info', component:ContactInfoComponent
    },
];
