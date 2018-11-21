import { Injectable } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { CountryModel } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ApiManagerService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getList(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.urls.country.getList)
      .pipe(
        // retry a failed request up to 3 times
        retry(3),
        // then handle the error
        catchError(this.handleError)
      );
  }

}
