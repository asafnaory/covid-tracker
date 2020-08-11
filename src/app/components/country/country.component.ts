import { ApisService } from './../../services/apis.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() curr;
  constructor(public api: ApisService) {}

  ngOnInit(): void {
    this.api.getDataForCountry('Grenada').subscribe(res => {
      this.curr = res;
    });
  }
}
