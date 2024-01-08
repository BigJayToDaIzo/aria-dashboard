import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilThreeComponent } from './util-three/util-three.component';

@Component({
  selector: 'app-right-column',
  standalone: true,
  imports: [
    CommonModule,
    UtilThreeComponent
  ],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.css'
})
export class RightColumnComponent {

}
