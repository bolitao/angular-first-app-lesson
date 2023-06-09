import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button"
                (click)="filterResults(filter.value)">Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let h of filteredLocationList"
        [info]="h"
      ></app-housing-location>
    </section>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((data: HousingLocation[]) => {
      this.housingLocationList = data;
      this.filteredLocationList = data;
    });
  }

  filterResults(input: string) {
    if (!input) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(e => e?.city.toLowerCase().includes(input.toLowerCase()));
    }
  }
}
