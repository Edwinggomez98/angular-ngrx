import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectSelectedCountrys } from '../../../state/selectors/country.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  notifications: boolean = false;
  selectedCountrysSubscription: Subscription | null = null;
  selectedCountrys: any = [];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.selectedCountrysSubscription = this.store
      .select(selectSelectedCountrys)
      .subscribe((selectedCountries) => {
        this.selectedCountrys = selectedCountries;
      });
  }

  ngOnDestroy(): void {
    if (this.selectedCountrysSubscription) {
      this.selectedCountrysSubscription.unsubscribe();
    }
  }
}
