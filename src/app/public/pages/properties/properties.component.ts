import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  propiedades: Property[];
  propiedadesAux: Property[];
  loading:boolean = true;
  searchWord:string;
  constructor(private router: Router, private storageSvc: StorageService) {}

  ngOnInit(): void {
    this.getAllproperties();
  }

  getAllproperties() {
    this.loading = true;
    this.storageSvc.GetAll('properties').subscribe(properties => {
      this.propiedades = properties;
      this.propiedadesAux = properties;

      console.log(properties);
      this.loading = false;
    });
  }
  goToDetails(property: any) {
    this.router.navigateByUrl('propiedad/' + property.id);
  }

  handleOnSearch(value:any)
  {
    this.searchWord = value;
    this.hacerBusqueda();
  }

  hacerBusqueda() {
    if (this.searchWord === '') {
      this.propiedades = this.propiedadesAux;
      return;
    }
    const serachParamLower = this.searchWord.toLowerCase();
    this.propiedades = this.propiedadesAux.filter(item =>
      this.doSearch(item, serachParamLower)
    );
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

    return (
      typeof value == 'string' ? value.toLocaleLowerCase() : value.toString()
    ).includes(searcher);
  }

}
