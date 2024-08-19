import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { PublicApiServiceTsService } from '../../service/public-api.service.ts.service';
import { CardComponent } from './components/card/card.component';
import { Store } from '@ngrx/store';
import {
  addSelectedCountry,
  loadCountryComplete,
  loadCountryStart,
  selectedCountryCount,
} from '../../state/actions/country.actions';
import { Observable } from 'rxjs';
import { selectLoadingCountry } from '../../state/selectors/country.selectors';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  public countryData = signal<[]>([]);
  public selectedCountryData = signal<any>([]);

  public loading$: Observable<boolean> = new Observable();

  constructor(
    private dataService: PublicApiServiceTsService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.loading$ = await this.store.select(selectLoadingCountry);
    this.store.dispatch(loadCountryStart());

    this.dataService.getData().subscribe({
      next: (result: any) => {
        this.countryData.set(result);
        this.store.dispatch(loadCountryComplete({ data: result }));
        this.store.dispatch(selectedCountryCount({ data: 0 }));
        console.log(this.countryData());
      },
      error: (err: any) => {
        console.error('Error_:', err);
      },
    });
  }

  addAnotherSelectedCountry(newCountry: any) {
    const existingCountries = this.selectedCountryData();
    const updatedCountries = existingCountries.filter(
      (country: any) => country !== newCountry
    );

    if (updatedCountries.length === existingCountries.length) {
      updatedCountries.push(newCountry);
    }

    this.selectedCountryData.set(updatedCountries);
    this.store.dispatch(
      selectedCountryCount({ data: this.selectedCountryData().length })
    );
    this.store.dispatch(
      addSelectedCountry({ data: this.selectedCountryData() })
    );
    // console.log(this.selectedCountryData());
  }
}
