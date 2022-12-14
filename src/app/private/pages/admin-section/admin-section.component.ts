import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'sb-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss'],
})
export class AdminSectionComponent {
  public section: string;

  constructor(private router: Router, private location: Location) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handleSection();
      });
  }

  handleSection() {
    this.section = this.location.path().split('/')[1];
  }
}
