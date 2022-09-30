import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property, PropertyType, Type } from 'src/app/models/property';

@Component({
  selector: 'sb-admin-properties-list',
  templateUrl: './admin-properties-list.component.html',
  styleUrls: ['./admin-properties-list.component.scss']
})
export class AdminPropertiesListComponent implements OnInit {
  @Input() propierties: Property[];
  @Input() propiertiesSearch: Property[];
  searchParam: string;
  showAddProperty: boolean = false;
  btnText:string = "Agregar propiedad + ";

  constructor(private router:Router) {}

  ngOnInit(): void {}

  hacerBusqueda() {
    if (this.searchParam === '') {
      this.propierties = this.propiertiesSearch;
      return;
    }
    const serachParamLower = this.searchParam.toLowerCase();
    this.propierties = this.propiertiesSearch.filter((item) => this.doSearch(item, serachParamLower));
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

  clearFilter(){
    this.searchParam = ''
    this.hacerBusqueda();
  }

  goToDetail(id:string){
    console.log('go'+id)
    this.router.navigate(['admin/propiedad/' + `${id}`])
  }

  toggleShowAddProperty(){
    console.log(this.showAddProperty)
    if(this.showAddProperty){
      this.showAddProperty = false
      this.btnText = "Agregar propiedad + "
    }
    else{
      this.showAddProperty = true;
      this.btnText = "Ver propiedades"
    }
  }
}
