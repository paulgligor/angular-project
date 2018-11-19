import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/services/country/country.service';
import { CountryModel } from 'src/app/core/models/country.model';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {

  public countriesList: CountryModel[] = new Array();

  constructor(private countryService: CountryService ) { }

  ngOnInit() {
    this.countryService.getList().subscribe(result => {
      this.countriesList = result;
    });
  }
}
