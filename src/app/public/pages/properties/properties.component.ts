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
  productos: any[] = [
    {
      id: 1,
      title: "Casa quinta pilar",
      price: "USD 650.000",
      description: "4.000 mts cuadrados, 2 baños, 6 habitaciones",
    },
    {
      id: 2,
      title: "Departamento en san isidro",
      price: "USD 95.000",
      description: "Departamento petfriendly en san isidro",
    },
    {
      id: 3,
      title: "casa en Bernal",
      price: "USD 250.000",
      description: "Linda casa para familia en bernal",
    },
    {
      id: 4,
      title: "Chalet en nordelta",
      price: "USD 1.000.000",
      description: "Hermoso chalet en pleno centro de nordelta",
    }
  ]

  constructor(private router: Router, private storageSvc: StorageService) {
  }

  getAllproperties() {
    this.storageSvc.GetAll("properties").subscribe((p) => { console.log(p) })
  }
  goToDetails(property: any) {
    this.router.navigateByUrl("propiedad/" + property.id)
  }
  ngOnInit(): void {
    this.getAllproperties()
  }

}
