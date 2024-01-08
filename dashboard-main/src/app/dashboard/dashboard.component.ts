import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthCalendarComponent } from './left-column/month-calendar/month-calendar.component';
import { UtilOneComponent } from './left-column/util-one/util-one.component';
import { UtilTwoComponent } from './left-column/util-two/util-two.component';
import { DetailComponent } from './detail/detail.component';
import { RightColumnComponent } from './right-column/right-column.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MonthCalendarComponent,
    UtilOneComponent,
    UtilTwoComponent,
    DetailComponent,
    RightColumnComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
