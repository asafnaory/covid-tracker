import { ApisService } from './../../services/apis.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  countries: any = [];
  @Output() changeCountry = new EventEmitter();

  constructor(public apis: ApisService) {}

  ngOnInit(): void {
    this.apis.getCountries().subscribe(
      res => {
        this.countries = res;
      },
      err => console.log(err)
    );
  }

  handleChange(e) {
    // console.log(e);
    this.changeCountry.emit(e);
  }
}
