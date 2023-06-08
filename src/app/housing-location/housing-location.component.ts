import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="listing">
    <img
      class="listing-photo"
      [src]="info.photo"
      alt="Exterior photo of {{ info.name }}"
    />
    <h2 class="listing-heading">{{ info.name }}</h2>
    <p class="listing-location">
      {{ info.city }}, {{ info.state }}
    </p>
  </section>`,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() info!: HousingLocation;
}
