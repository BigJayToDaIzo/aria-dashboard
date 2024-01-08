import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { FinishedComponent } from '../finished/finished.component';
import { InOfficeComponent } from '../in-office/in-office.component';
import { ScheduledComponent } from '../scheduled/scheduled.component';

@Component({
  selector: 'app-detail-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ScheduledComponent,
    InOfficeComponent,
    FinishedComponent
  ],
  providers: [
    DatePipe
  ],
  templateUrl: './detail-nav-bar.component.html',
  styleUrl: './detail-nav-bar.component.css'
})
export class DetailNavBarComponent {
  todaysDate: string = Date();
  outputDate;

  constructor(private datePipe: DatePipe){
    this.outputDate = this.datePipe.transform(this.todaysDate, 'EEEE, MMMM d, y');

  }

}
