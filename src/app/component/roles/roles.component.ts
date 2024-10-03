import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { IkanyeWest, Iweather } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {
    // firstName: string = ""
    // age: number = 25
    // selectValue: string = ""
    // radioVal: string = ""
    // count: number = 0

  base: string = ""
  kanyeQoute: string = ""
  iweather: Iweather [] = []
  ikanye: IkanyeWest[] = []

  http = inject(HttpClient)

  ngOnInit(): void {
  this.getAllRoles()
  this.kanyeRest()
  }


kanyeRest () {
  this.http.get("https://api.kanye.rest/").subscribe((res:any) => {
    const kanyeResp = this.ikanye = res
    const kanyeValue: string = kanyeResp.quote
    this.kanyeQoute = kanyeValue

  })
}
getAllRoles () {
  this.http.get("https://api.openweathermap.org/data/2.5/weather?q=lahug&units=metric&appid=60f06bb755213c4c8e5887d8f7b59046").subscribe((res:any) => {
    const respData = this.iweather = res
    this.base = respData.base
  })
}

}
