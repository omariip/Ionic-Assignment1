import { appointment } from "src/app/appointment";
import { Time } from "@angular/common";

export const appointments: appointment[] = [
    
    { appDate: new Date(2021, 2, 20), appTime: {hours: 2, minutes: 40}, appOHIP: 5554433, appEmail: 'as@as.com', appPhone: 3945849, appAgent: 'John'},
    { appDate: new Date(2022, 10, 21), appTime: {hours: 4, minutes: 33}, appOHIP: 3434343, appEmail: 'as@as.com', appPhone: 3456346, appAgent: 'johnny'},
    { appDate: new Date(2020, 4, 10), appTime: {hours: 9, minutes: 20}, appOHIP: 3434323, appEmail: 'as@as.com', appPhone: 8069755, appAgent: 'paul'},
    { appDate: new Date(1999, 6, 20), appTime: {hours: 5, minutes: 50}, appOHIP: 6785655, appEmail: 'as@as.com', appPhone: 5506945, appAgent: 'sam'},
    { appDate: new Date(1980, 6, 20), appTime: {hours: 6, minutes: 46}, appOHIP: 6785655, appEmail: 'as@as.com', appPhone: 5506945, appAgent: 'Jesscia'}
];