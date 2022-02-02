import { Injectable } from '@angular/core';
import { appointments } from 'src/assets/Data/appointmentData';
import { appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  constructor() { }

  preLoadAppointments() {
    if(localStorage.length == 0){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
  }

  saveAppointment(a1: appointment[]) {

    var appointmentsArray: appointment[];

    appointmentsArray = JSON.parse(localStorage.getItem('appointments'));

    if(appointmentsArray == null) appointmentsArray = [];

    for(var i=0; i<a1.length; i++)
    {
      appointmentsArray.push(a1[i])
    }
  
    localStorage.setItem('appointments', JSON.stringify(appointmentsArray));
    
    //localStorage.setItem('appointments', JSON.stringify(a1));
  }

  deleteAppointment(index: number) {
    let app: appointment[] = this.loadAppointments();
    
    app.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(app));

    window.location.reload();
  }

  loadAppointments(){
    return JSON.parse(localStorage.getItem("appointments"));
  }
}