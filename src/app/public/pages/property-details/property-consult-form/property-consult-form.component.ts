import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Property } from 'src/app/models/property.model';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-property-consult-form',
  templateUrl: './property-consult-form.component.html',
  styleUrls: ['./property-consult-form.component.scss']
})
export class PropertyConsultFormComponent extends FormValidationAbstract implements OnInit {
  @Input() prop: Property;
  formGroup:UntypedFormGroup
  loading:boolean = false;

  constructor(private storageSvc: StorageService, private formBuilder:UntypedFormBuilder, private alertSvc:AlertService) {
    super()
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      name: [''],
      emailOrPhone: [''],
      message: [''],
      property: [this.prop],
      read:[false],
      date: [new Date().toLocaleDateString()],
    })
  }

  sendConsult(){
    this.loading = true;
    this.storageSvc.Insert('consults', this.formGroup.value).then(() => {
      this.loading = false;
      this.formGroup.reset();
      this.alertSvc.alertCenter('success', 'Consulta enviada con éxito');

    }, err => {
      this.loading = false;
    }
    )

  }

  setErrorMessages(): void {

  }

}
