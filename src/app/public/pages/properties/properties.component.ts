import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  productos = [
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

  constructor() { }


  ngOnInit(): void {
  }

}
