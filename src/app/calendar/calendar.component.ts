import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Events } from '../shared/Model/Calendar';
import { CalendarOptions } from '@fullcalendar/angular';
import { SharepointService } from '../shared/services/sharepoint.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent;

  calendarEvents: Events[] = [];
  events:any=[];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),

  };

  constructor(public sharepointService: SharepointService) { }

  ngOnInit(): void {
    this.getCalendarData();
  }

  getCalendarData() {
    this.sharepointService.getEventData().then((res) => {
      this.calendarEvents = res;
      for (var x of this.calendarEvents){
        this.events.push({ title: x.Title, date: x.EventDate }) ;
      }
      this.calendarOptions.events=this.events;
      console.log("Data", this.calendarOptions.events);
    }).catch((err) => {
      console.log("Error", err);
    })
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

}
