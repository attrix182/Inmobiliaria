import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './search.service';

@Component({
  selector: 'sb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public provincias: any;
  provincia: string = 'Todas';
  typeOfProperty: string;
  enabled = false;
  propType: any;
  selectProp: any;

  claseComprar = 'btn btn-light';
  claseVender = 'btn btn-light';
  claseAlquilar = 'btn btn-light';
  constructor(private searchSVC: SearchService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.propType = ['Casa', 'Departamento', 'Oficina'];
  }

  search() {
    let path = 'propiedades';
    this.typeOfProperty = (document.getElementById('typeProperties') as HTMLSelectElement).value;
    this.provincia = (document.getElementById('province') as HTMLSelectElement).value;

  /*   this.typeOfProperty = (document.getElementById('typeProperties') as HTMLSelectElement).value;
    this.typeOfProperty ? (query += `?type=${this.typeOfProperty}`) : 'propiedades/';
    this.provincia = (document.getElementById('province') as HTMLSelectElement).value;
    this.provincia !== 'Todas' ? (query += `&province=${this.provincia}`) : ''; */
    this.router.navigate([path], { queryParams: { type: this.typeOfProperty, province: this.provincia } });
    document.querySelector('.a-fullscreen').classList.remove('a-fullscreen');
  }

  setActive(accion: string) {
    this.enabled = true;
    switch (accion) {
      case 'comprar':
        this.claseComprar = 'btn btn-dark';
        this.claseVender = 'btn btn-light';
        this.claseAlquilar = 'btn btn-light';
        break;
      case 'vender':
        this.claseVender = 'btn btn-dark';
        this.claseComprar = 'btn btn-light';
        this.claseAlquilar = 'btn btn-light';
        this.router.navigateByUrl('/vender');
        break;
      case 'alquilar':
        this.claseAlquilar = 'btn btn-dark';
        this.claseComprar = 'btn btn-light';
        this.claseVender = 'btn btn-light';
        break;
    }
  }
}
