import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'sb-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.scss']
})
export class AdminPropertiesComponent implements OnInit {
propierties:Property[]
  constructor() { }

  ngOnInit(): void {
    this.propierties = [
      {
        id: '1',
        price: 123414,
        currency: "USD",
        squareFeet: 500,
        squareFeetCover: 350,
        baths: 2,
        bedrooms: 2,
        parkings: 1,
        yearBuilt: 2001,
        adress: {
          province: 'Buenos Aires',
          locality: 'Capital Federal',
          street: 'Belgrano 650',
          zipCode: '1509'
        },
        offerType: "compra",
        propertyType: "casa",
        props: [{ key: 'Aire acondicionado', value: true }],
        images: [
          'https://static.tokkobroker.com/water_pics/90693648330766303097408924689666580070453156559614122095017522536700902347674.jpg'
        ]
      },
      {
        id: '2',
        price: 50000,
        currency: "ARS",
        squareFeet: 600,
        squareFeetCover: 300,
        baths: 1,
        bedrooms: 1,
        parkings: 1,
        yearBuilt: 2009,
        adress: {
          province: 'Buenos Aires',
          locality: 'Quilmes',
          street: '9 de Julio 650',
          zipCode: '1876'
        },
        offerType: "alquiler",
        propertyType: "departamento",
        props: [{ key: 'Aire acondicionado', value: true }],
        images: [
          'https://static.tokkobroker.com/pictures/76545454326738379067409377005784535971307697001491666557053371854077101959430.jpg'
        ]
      }
    ];

  }

}
