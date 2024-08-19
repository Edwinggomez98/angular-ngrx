import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicApiServiceTsService {
  private link: string =
    'https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,flags,population,name';

  constructor(private http: HttpClient) {}

  getData(): any {
    const header = new HttpHeaders({});
    let request: any;

    try {
      request = this.http.get<any>(this.link, {
        headers: header,
      });
    } catch (error) {}

    return request;
  }
}
