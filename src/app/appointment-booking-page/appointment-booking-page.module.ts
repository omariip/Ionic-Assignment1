import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentBookingPagePageRoutingModule } from './appointment-booking-page-routing.module';

import { AppointmentBookingPagePage } from './appointment-booking-page.page';
import { ModuleModule } from '../module/module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentBookingPagePageRoutingModule, ModuleModule
  ],
  declarations: [AppointmentBookingPagePage]
})
export class AppointmentBookingPagePageModule {}
