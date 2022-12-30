import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  prop: any;
  @ViewChild('fotoModal', { read: TemplateRef })
  fotoModal: TemplateRef<any>;
  imageToOpen: string = '';
  loading: boolean;
  hasMultipleImages: boolean = false;

  constructor(
    private modalSvc: NgbModal,
    private storageSvc: StorageService,
    private location: Location,
    private router: Router
  ) {}

  getPropertyById(id: string) {
    this.loading = true;
    this.storageSvc.GetByParameter('properties', 'id', id).subscribe((p) => {
      this.prop = p[0];
      if (typeof this.prop.images !== 'string') {
        this.hasMultipleImages = true;
      }
      this.loading = false;
    });
    console.log(id);
  }

  ngOnInit(): void {
    this.getPropertyById(this.location.path().split('/')[2]);
  }

  back() {
    this.router.navigateByUrl('propiedades');
  }

  openImage(img: string) {
    this.imageToOpen = img;
    this.modalSvc.open(this.fotoModal, { size: 'xl' });
  }
}
