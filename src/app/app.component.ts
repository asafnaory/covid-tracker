import { ApisService } from './services/apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-tracker';
  currCountry = {};

  constructor(public apis: ApisService) {}

  ngOnInit(): void {
    // this.apis.getCountries().subscribe(res => console.log(res), err => console.log(err));
    // this.apis.getDataForCountry('israel').subscribe(res => console.log(res), err => console.log(err));
  }

  handleCountryChange(e) {
    this.apis.getDataForCountry(e).subscribe(
      res => {
        this.currCountry = res;
      },
      err => {
        console.log(err);
        this.currCountry = {};
      }
    );
  }

  // draw(): void {
  //   this.apis.getCurrentActiveCases().subscribe(res => console.log(res), error => console.log(error));
  // }
}
