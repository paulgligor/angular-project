import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/services/country/country.service';
import { CountryModel } from 'src/app/core/models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public countriesList: CountryModel[] = new Array();

  constructor(private countryService: CountryService ) { }

  ngOnInit() {
    this.countryService.getList().subscribe(result => {
      this.countriesList = result;
    });
  }
}
