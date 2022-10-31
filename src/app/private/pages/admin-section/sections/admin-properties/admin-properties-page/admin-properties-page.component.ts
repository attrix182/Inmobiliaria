import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/property';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-properties-page',
  templateUrl: './admin-properties-page.component.html',
  styleUrls: ['./admin-properties-page.component.scss'],
})
export class AdminPropertiesPageComponent implements OnInit {
  id: string;
  prop: Property;
  loading: boolean = true;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private router: Router,
    private storageSVC: StorageService
  ) {}

  ngOnInit(): void {
    this.load();
    this._Activatedroute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.getPropertyByID(id);
    });
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }

  getPropertyByID(id: string) {
    this.storageSVC
      .GetByParameter('properties', 'id', id)
      .subscribe(p => (this.prop = p[0]));
  }

  goToProperties() {
    this.router.navigateByUrl('admin-properties');
  }
}
