import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-in-office',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './in-office.component.html',
  styleUrl: './in-office.component.css'
})
export class InOfficeComponent {
  aptsInOffice = [
    {
      fname: 'Dolly',
      lname: 'Parton',
      dob: '01/19/1646',
      age: '77',
      aptTimeRange: {
        start: '9:00am',
        end: '10:00am'
      },
      aptType: 'Consultation',
      location: 'Aria Cosmetic Surgery',
      pcSurgeon: 'BRIAN PORSHINSKY',
      chargeStatus: 'not started',
      noteStatus: 'not started' 
    }
  ]
}
