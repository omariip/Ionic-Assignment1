import { Time } from "@angular/common";

export interface appointment {
    appDate: Date;
    appTime: Time;
    appOHIP: number;
    appEmail?: string;
    appPhone?: number;
    appAgent: string;
}