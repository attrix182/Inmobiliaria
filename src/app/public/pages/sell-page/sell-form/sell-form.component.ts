import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.scss']
})
export class SellFormComponent extends FormValidationAbstract implements OnInit {
  formGroup: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private alertSvc: AlertService, private storageSvc: StorageService, private router:Router) {
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
      comment: ['', [Validators.required]]
    });
  }

  enviarFormulario() {
    this.loading = true;
    let formData = this.formGroup.value;
    formData.date = new Date().toLocaleDateString();
    this.storageSvc
      .Insert('sell-contact', this.formGroup.value)
      .then((res) => {
        this.loading = false;

        this.alertSvc.alertCenter('success', '¡Pronto nos pondremos en contacto con vos!, seras redireccionado a la pagina principal');
        this.formGroup.reset();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1800);
      })
      .catch((err) => {
        this.loading = false;
        this.alertSvc.alertCenter('error', '¡Algo salio mal!');

      });
  }

  setErrorMessages(): void {
    this.errroMessages = {
      name: {
        required: 'El nombre es obligatorio'
      },
      email: {
        required: 'El correo es obligatorio',
        pattern: 'El correo no es válido'
      },
      comment: {
        required: 'El comentario es obligatorio',
        minlength: 'La contraseña debe tener al menos 6 caracteres'
      }
    };
  }
}
