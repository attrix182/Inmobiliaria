import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Property } from 'src/app/models/property';
import { AlertService } from 'src/app/services/alert.service';
import { GeorefService } from 'src/app/services/georef.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-admin-properties-add',
  templateUrl: './admin-properties-add.component.html',
  styleUrls: ['./admin-properties-add.component.scss'],
})
export class AdminPropertiesAddComponent
  extends FormValidationAbstract
  implements OnInit
{
  formGroup: FormGroup;
  loading: boolean = false;
  provincias: any[] = [];
  ciudades: any[] = [];
  filePath: string;
  image: File;
  selectImage: boolean = true;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;
  imageUrl: string;
  property: Property;
  tipos = ['Casa', 'Departamento', 'Oficina', 'Terreno'];
  oferta = ['Venta', 'Alquiler', 'Consultar'];
  anios: any = [];
  constructor(
    private fb: FormBuilder,
    private geoRef: GeorefService,
    private storageSVC: StorageService,
    private imageCompress: NgxImageCompressService,
    private alertSVC: AlertService
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.getProvincias();
    this.inicializarAnios();
  }

  inicializarAnios() {
    let anioActual = new Date().getFullYear();
    let anioInicial = anioActual - 120;

    for (let i = anioInicial; i <= anioActual; i++) {
      this.anios.push(i);
    }
    this.anios = this.anios.reverse();
  }

  compressFile() {
    this.selectImage = true;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompress = image;
      /* console.warn('Size in bytes was:', this.imageCompress.byteCount(image)); */
      this.imageCompress
        .compressFile(image, orientation, 50, 40)
        .then(result => {
          this.imgResultAfterCompress = result;
          this.selectImage = false;
        });
    });
  }

  saveProperty() {
    this.loading = true;
    console.log(this.formGroup.value);

    let prop = this.formGroup.value;
    prop.image = this.imgResultAfterCompress.split(/,(.+)/)[1];

    prop.adress = {
      province: this.formGroup.value.province,
      locality: this.formGroup.value.locality,
      street: this.formGroup.value.street,
      zipCode: this.formGroup.value.zipCode,
    };
    this.storageSVC.InsertPropertyWithImage('properties', prop);
    this.clearForm();
    this.loading = false;
    this.alertSVC.alertTop('success', 'Propiedad agregada con exito');
  }

  addProperty() {}

  clearForm() {
    this.formGroup.reset();
    this.imgResultAfterCompress = '';
  }

  getProvincias() {
    this.geoRef.getProvincias().subscribe(result => {
      this.provincias = result.provincias.map(prov => ({
        nombre: prov.nombre,
        id: prov.id,
      }));
    });
  }
  getCiudadesByProvincia(provincia: any) {
    this.geoRef.getCiudades(provincia).subscribe(result => {
      this.ciudades = result.municipios.map(munic => ({
        nombre: munic.nombre,
        id: munic.id,
      }));
    });
  }

  onProvinciaChange() {
    this.getCiudadesByProvincia(this.formGroup.value.province);
  }

  initForm() {
    this.formGroup = this.fb.group({
      id: ['', []],
      title: ['', []],
      description: ['', []],
      price: ['', []],
      currency: ['', []],
      squareFeet: ['', []],
      squareFeetCover: ['', []],
      bedrooms: ['', []],
      parkings: ['', []],
      yearBuilt: ['', []],
      province: ['', []],
      locality: ['', []],
      street: ['', []],
      zipCode: ['', []],
      baths: ['', []],
      offerType: ['', []],
      propertyType: ['', []],
      props: ['', []],
      images: ['', []],
    });
  }

  setErrorMessages(): void {
    this.errroMessages = {
      nombre: {
        required: 'El nombre es requerido',
      },
      apellido: {
        required: 'El apellido es requerido',
      },
    };
  }
}
