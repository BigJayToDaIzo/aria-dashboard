import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-util-two',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './util-two.component.html',
  styleUrl: './util-two.component.css'
})
export class UtilTwoComponent {

}
