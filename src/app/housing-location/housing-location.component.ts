import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section class="listing">
    <img
      class="listing-photo"
      [src]="info.photo"
      alt="Exterior photo of {{ info.name }}"
    />
    <h2 class="listing-heading">{{ info.name }}</h2>
    <p class="listing-location">{{ info.city }}, {{ info.state }}</p>
    <a [routerLink]="['/details', info.id]">Learn More</a>
  </section>`,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() info!: HousingLocation;
}
