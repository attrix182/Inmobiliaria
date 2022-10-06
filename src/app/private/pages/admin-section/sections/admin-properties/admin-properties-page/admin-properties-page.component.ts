import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'sb-admin-properties-page',
  templateUrl: './admin-properties-page.component.html',
  styleUrls: ['./admin-properties-page.component.scss']
})
export class AdminPropertiesPageComponent implements OnInit {
  id: string;
  prop:Property;

  constructor(private _Activatedroute: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.prop =  {
      id: '1',
      price: 50000,
      currency: "ARS",
      squareFeet: 600,
      squareFeetCover: 300,
      baths: 1,
      bedrooms: 1,
      parkings: 1,
      yearBuilt: 2009,
      adress: {
        country: 'Argentina',
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
  }

  goToProperties(){
    this.router.navigateByUrl('admin-properties')
  }

}
