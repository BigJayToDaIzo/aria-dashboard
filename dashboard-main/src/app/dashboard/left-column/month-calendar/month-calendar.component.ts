import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-month-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  templateUrl: './month-calendar.component.html',
  styleUrl: './month-calendar.component.css'
})
export class MonthCalendarComponent {
  selectedDate: any;

  onSelect(event: Event){
    this.selectedDate = event;
  }
}
