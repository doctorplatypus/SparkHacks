import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  center: google.maps.LatLngLiteral = {lat: 41.8747826293364, lng: -87.65132618590007};
}
