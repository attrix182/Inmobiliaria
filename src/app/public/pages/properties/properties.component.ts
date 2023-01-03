import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  propiedades: Property[];
  propiedadesAux: Property[];
  localidades: string[];
  provincias: string[];
  provinceSelected: string = null;
  localitySelected: string = null;
  loading: boolean = true;
  searchWord: string;
  constructor(private router: Router, private storageSvc: StorageService) {}

  ngOnInit(): void {
    this.getAllproperties();
  }

  ngAfterContentChecked() {
    this.getQueryByUrl();
  }

  getQueryByUrl() {
    let query = this.router.url.split('/')[2];
    let url = this.router.url.split('/')[1];


    if (query || url) {
      this.searchWord = query?.replaceAll('%20', ' ');
      if(url.includes('type')) {
        let type = url.split('?type=')[1].split('&')[0];
        this.searchWord = type;
        this.hacerBusqueda();
      }

      this.hacerBusqueda();
    }
  }

  getAllproperties() {
    this.loading = true;
    this.storageSvc.GetAll('properties').subscribe((properties) => {
      this.propiedades = properties;
      this.propiedadesAux = properties;
      this.getAllLocalities();
      this.getAllProvinces();
      this.loading = false;
    });
  }
  goToDetails(property: any) {
    this.router.navigateByUrl('propiedad/' + property.id);
  }

  insertSearchWord() {
    this.storageSvc.Insert('searchWords', this.searchWord);
  }

  handleOnSearch(value: any) {
    this.searchWord = value;
    this.hacerBusqueda();
  }

  hacerBusqueda() {
    if (this.searchWord === '') {
      this.propiedades = this.propiedadesAux;
      return;
    }

    let searchWords = this.searchWord.split(' ');
    if (searchWords.length >= 2) {
      searchWords.forEach((word) => {
        this.propiedades = this.propiedadesAux.filter((item) => this.doSearch(item, word.toLocaleLowerCase()));
      });
      return;
    }

    const serachParamLower = this.searchWord.toLowerCase();
    this.propiedades = this.propiedadesAux.filter((item) => this.doSearch(item, serachParamLower));


  }

  searchByProvince() {
    let selectLocalidad = document.getElementById('selectLocalidad') as HTMLSelectElement;
    selectLocalidad.selectedIndex = 0;
    this.localitySelected = '';
    this.searchWord = this.provinceSelected;
    this.hacerBusqueda();
  }

  searchByLocality() {
    let selectProvincia = document.getElementById('selectProvincia') as HTMLSelectElement;
    selectProvincia.selectedIndex = 0;
    this.provinceSelected = '';
    this.searchWord = this.localitySelected;
    this.hacerBusqueda();
  }

  clearFilters() {
    this.searchWord = '';
    this.provinceSelected = '';
    this.localitySelected = '';
    let selectLocalidad = document.getElementById('selectLocalidad') as HTMLSelectElement;
    let selectProvincia = document.getElementById('selectProvincia') as HTMLSelectElement;
    selectLocalidad.selectedIndex = 0;
    selectProvincia.selectedIndex = 0;

    this.hacerBusqueda();
  }

  getAllLocalities() {
    this.localidades = this.propiedades.map((item) => item.adress.locality);
    this.localidades = [...new Set(this.localidades)];
    let empty = this.localidades.indexOf('');
    this.localidades.splice(empty, 1);
  }

  getAllProvinces() {
    this.provincias = this.propiedades.map((item) => item.adress.province);
    this.provincias = [...new Set(this.provincias)];
  }

  setProvince(prov: any) {
    this.provinceSelected = prov.value;
  }

  setLocality(loc: any) {
    this.localitySelected = loc.value;
  }

  doSearch(value, searcher) {
    if (typeof value === 'boolean') {
      return false;
    }

    if (typeof value === 'object') {
      for (let fieldKey in value) {
        if (this.doSearch(value[fieldKey], searcher)) {
          return true;
        }
      }
      return false;
    }

    return (typeof value == 'string' ? value.toLocaleLowerCase() : value.toString()).includes(searcher);
  }
}
