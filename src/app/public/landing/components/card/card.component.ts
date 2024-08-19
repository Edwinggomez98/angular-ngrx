import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() country: any;
  @Input() selectedCountry: boolean = false;
  @Output() clickCountry = new EventEmitter<any>();

  selectCountry() {
    this.clickCountry.emit(this.country);
  }
}
