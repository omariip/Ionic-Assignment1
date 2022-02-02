import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { appointments} from 'src/assets/Data/appointmentData';
import { ServiceService } from '../service.service';
import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content: IonContent;
  agentID = "";

  allAppointments;
  showAppointment = false;
  preLoadedData;
  confirmDeletion = false;
  deleteIndex;
  
  constructor(private data: ServiceService) {
    
    this.data.preLoadAppointments();
    let a = this.data.loadAppointments();
    this.allAppointments = a;
    
  }

  showAppointments(){
    this.showAppointment = !this.showAppointment;
  }

  firstDelete(i: number){
    this.confirmDeletion = true;
    this.deleteIndex = i;
    this.content.scrollToTop(400);
  }

  deleteAppointment() {
    this.data.deleteAppointment(this.deleteIndex);
  }

  refreshAppointments(){
    location.reload();
  }
}
