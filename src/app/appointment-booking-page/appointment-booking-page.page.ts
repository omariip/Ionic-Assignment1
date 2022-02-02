import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appointment } from '../appointment';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-appointment-booking-page',
  templateUrl: './appointment-booking-page.page.html',
  styleUrls: ['./appointment-booking-page.page.scss'],
})
export class AppointmentBookingPagePage implements OnInit {

  data: any;
  date: Date = null;
  time: Time = null;
  ohip;
  email = "";
  phone;

  constructor(private route: ActivatedRoute, private serviceData: ServiceService ) { }

  ngOnInit() {
    this.data = this.route.snapshot.params;
    console.log(this.data);
  }

  addAppointment() {
    let appointment: appointment[] = [
    {appDate: this.date, appTime: this.time, appOHIP: this.ohip, appEmail: this.email, appPhone: this.phone, appAgent: this.data.myData}
  ];
    this.serviceData.saveAppointment(appointment);
  }

  disableInput() {
    return (this.ohip == null || this.time == null || this.date == null) || (this.email == "" && this.phone == null);
  }
}