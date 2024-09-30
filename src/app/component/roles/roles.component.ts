import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
    firstName: string = ""
    age: number = 25
    selectValue: string = ""
    radioVal: string = ""
    count: number = 0
    testFunc = () => {
      console.log("Hello World")
    }
}
