import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  constructor(public http: HttpClient) {}

  // getCurrentActiveCases(): Observable<any> {
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       const data = 4500;
  //       observer.next(data);
  //     }, 3000);
  //   });
  // }

  getCountries() {
    return this.http.get('https://api.covid19api.com/countries');
  }

  getDataForCountry(country) {
    return this.http.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
  }
}
