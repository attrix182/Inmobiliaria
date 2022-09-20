import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'sb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public provincias: any;

  claseComprar = 'btn btn-light';
  claseVender = 'btn btn-light';
  claseAlquilar = 'btn btn-light';

  constructor(private searchSVC: SearchService) {}

  ngOnInit(): void {
 //   this.getProvincias();
  }

  setActive(accion: string) {
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
        break;
      case 'alquilar':
        this.claseAlquilar = 'btn btn-dark';
        this.claseComprar = 'btn btn-light';
        this.claseVender = 'btn btn-light';
        break;
    }
  }


}
