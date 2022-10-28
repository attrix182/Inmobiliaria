import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  propiedades: any[];

  constructor(private router: Router, private storageSvc: StorageService) {}

  ngOnInit(): void {
    this.getAllproperties();
  }

  getAllproperties() {
    this.storageSvc.GetAll('properties').subscribe((properties) => {
      this.propiedades = properties;
      console.log(properties)
    });
  }
  goToDetails(property: any) {
    this.router.navigateByUrl('propiedad/' + property.id);
  }

}
