import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent,RolesComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
currentComponent: string = ""
Roles: string = ""
Designation: string = ""
  divFunction = (val:string) => {
    this.currentComponent = val
    this.Roles = val
    this.Designation = val
  }

  testFunction = () => {
    console.log("Hello World")
  }
}
