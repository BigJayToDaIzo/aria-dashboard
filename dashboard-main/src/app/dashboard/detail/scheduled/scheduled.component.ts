import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduled',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.css'
})
export class ScheduledComponent {
  aptsScheduled = [
    {
      fname: 'Jane',
      lname: 'Doe',
      dob: '01/19/1973',
      age: '50',
      aptTimeRange: {
        start: '10:15am',
        end: '10:30am'
      },
      aptType: 'Post OP Follow Up',
      location: 'Aria Cosmetic Surgery',
      pcSurgeon: 'BRIAN PORSHINSKY',
      chargeStatus: 'not started' 
    },
    {
      fname: 'Bob',
      lname: 'Dylan',
      dob: '05/24/1941',
      age: '82',
      aptTimeRange: {
        start: '10:45am',
        end: '11:00am'
      },
      aptType: 'Post OP Follow Up',
      location: 'Aria Cosmetic Surgery',
      pcSurgeon: 'BRIAN PORSHINSKY',
      chargeStatus: 'not started' 
    },
    {
      fname: 'Kim',
      lname: 'Kardashian',
      dob: '10/21/1980',
      age: '43',
      aptTimeRange: {
        start: '11:15am',
        end: '12:15am'
      },
      aptType: 'Post OP Follow Up',
      location: 'Aria Cosmetic Surgery',
      pcSurgeon: 'BRIAN PORSHINSKY',
      chargeStatus: 'not started' 
    }
  ];

}
