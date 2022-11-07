import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'sb-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyCardComponent implements OnInit {
  @Input('property') property: Property;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(property: any) {
    this.router.navigateByUrl('propiedad/' + property.id);
  }


}
