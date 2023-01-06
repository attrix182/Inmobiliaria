import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'sb-admin-property-card',
  templateUrl: './admin-property-card.component.html',
  styleUrls: ['./admin-property-card.component.scss'],
})
export class AdminPropertyCardComponent implements OnInit {
  @Input('property') property: Property;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(property: any) {
    this.router.navigateByUrl('propiedad/' + property.id);
  }


}
