import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';
@Component({
  selector: 'sb-admin-users-add',
  templateUrl: './admin-users-add.component.html',
  styleUrls: ['./admin-users-add.component.scss'],
})
export class AdminUsersAddComponent
  extends FormValidationAbstract
  implements OnInit
{
  formGroup: UntypedFormGroup;
  loading: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private alertSvc: AlertService
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  saveUser() {
    this.loading = true;
    let newUser: User = this.formGroup.value;
    this.authService
      .registerUser(newUser)
      .then(() => {
        this.loading = false;
        this.formGroup.reset();
      })
      .catch(msg => {
        this.alertSvc.alertCenter('error', msg);
        this.loading = false;
      });
  }

  initForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      active: ['', []],
      email: ['', [Validators.required]],
    });
  }

  setErrorMessages(): void {
    this.errroMessages = {
      name: {
        required: 'El nombre es requerido',
      },
      lastname: {
        required: 'El apellido es requerido',
      },
    };
  }
}
