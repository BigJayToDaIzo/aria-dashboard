import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HelpComponent } from './help/help.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    LoginComponent,
    MatIconModule,
    MatButtonModule,
    SearchBarComponent,
    HelpComponent,
    InboxComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
