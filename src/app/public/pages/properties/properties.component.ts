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
propiedades: Property[]

  constructor(private router: Router, private storageSvc: StorageService) {
  }

  getAllproperties() {
    this.storageSvc.GetAll("properties").subscribe((p) => {
      this.propiedades=p
    })
  }
  goToDetails(property: any) {
    this.router.navigateByUrl("propiedad/" + property.id)
  }
  ngOnInit(): void {
    this.getAllproperties()
  }

}
