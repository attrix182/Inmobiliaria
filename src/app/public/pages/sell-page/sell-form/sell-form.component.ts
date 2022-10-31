import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.scss'],
})
export class SellFormComponent
  extends FormValidationAbstract
  implements OnInit
{
  formGroup: FormGroup;
  loading:boolean = false;
  constructor(private fb: FormBuilder, private alertSvc: AlertService) {
    super();
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      typeProperty: ['', []],
      zone: ['', []],
      comment: ['', [Validators.required]],

    });
  }

  enviarFormulario(){
    this.loading = true;
    setTimeout(() => {

      this.alertSvc.alertCenter('success', '¡Pronto nos pondremos en contacto con vos!')
      this.loading = false;
    }, 350);

  }

  setErrorMessages(): void {}
}
