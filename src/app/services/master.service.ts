import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { kanyeRest } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {}
  
  getDesignations ():Observable<kanyeRest> {
    return this.http.get<kanyeRest>("https://api.kanye.rest/")
  }
}
