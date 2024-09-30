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
class: string = ""
  divFunction = (val:string) => {
    this.currentComponent = val
  }
  testFunction = () => {
    console.log("Hello World")
  }
}

