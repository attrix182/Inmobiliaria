import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.scss']
})
export class AdminPropertiesComponent implements OnInit {
  propierties: any[];
  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties() {
    this.storageSVC.GetAll('properties').subscribe((p) => {
      this.propierties = p;
      console.log(this.propierties)
    });
  }

}
