import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { kanyeRest } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit {
  

  kanyeQuote: string = ""

  kanyeRestAPI = inject(MasterService)

  ngOnInit(): void {
    this.kanyeRestAPI.getDesignations().subscribe((resp:kanyeRest) => {
      this.kanyeQuote = resp.quote
    })
  }

}
