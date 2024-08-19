import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, count, map } from 'rxjs';
import { selectSelectedCountrys, selectSelectedCountrysCount } from '../../../state/selectors/country.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  selectedCountrys$: Observable<any[]> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.selectedCountrys$ = this.store.select(selectSelectedCountrysCount);
  }
}
