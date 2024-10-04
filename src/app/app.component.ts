import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RolesComponent } from './component/roles/roles.component';

import { MasterComponent } from './component/master/master.component';
import { DesignationComponent } from './component/designation/designation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RolesComponent,MasterComponent,DesignationComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatApplication';
}
