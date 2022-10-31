import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Route, Router } from '@angular/router';

import { SearchService } from './search.service';

@Component({
  selector: 'sb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public provincias: any;
  enabled = false;

  claseComprar = 'btn btn-light';
  claseVender = 'btn btn-light';
  claseAlquilar = 'btn btn-light';
  constructor(
    private searchSVC: SearchService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  search() {
    this.router.navigate(['propiedades']);
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
        break;
      case 'alquilar':
        this.claseAlquilar = 'btn btn-dark';
        this.claseComprar = 'btn btn-light';
        this.claseVender = 'btn btn-light';
        break;
    }
  }
}
