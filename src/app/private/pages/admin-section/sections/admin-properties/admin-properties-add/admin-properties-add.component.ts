import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-admin-properties-add',
  templateUrl: './admin-properties-add.component.html',
  styleUrls: ['./admin-properties-add.component.scss']
})
export class AdminPropertiesAddComponent extends FormValidationAbstract implements OnInit {
  formGroup: FormGroup;
  loading:boolean = false;

  constructor(private fb:FormBuilder) {
    super();
  }

  ngOnInit(){
    this.initForm();
  }

  saveProperty(){

  }

  initForm(){
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    })

  }

  setErrorMessages(): void {
    this.errroMessages = {
      nombre: {
        required: 'El nombre es requerido'
      },
      apellido: {
        required: 'El apellido es requerido'
      }
    }
  }

}
