import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'sb-admin-preferences',
  templateUrl: './admin-preferences.component.html',
  styleUrls: ['./admin-preferences.component.scss']
})
export class AdminPreferencesComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
