
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  selectedCountryInfo: any;

  constructor(private apiService: ApiService) {}
  onCountryClick(countryName: string) {
    this.apiService.getCountryInfo(countryName).subscribe(
      (response: any[]) => {
        const additionalInfo = response[1][0]; 
  
        this.selectedCountryInfo = {
          name: additionalInfo.name,
          capitalCity: additionalInfo.capitalCity,
          region: additionalInfo.region.value,
          incomeLevel: additionalInfo.incomeLevel.value,
          longitude: additionalInfo.longitude,
          latitude: additionalInfo.latitude
        };
      },
      (error: any) => {
        console.error('Error fetching additional country info:', error);
      }
    );
  }
}
