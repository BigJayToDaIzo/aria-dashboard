import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailNavBarComponent } from './detail-nav-bar/detail-nav-bar.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    DetailNavBarComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
