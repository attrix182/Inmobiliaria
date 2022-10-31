import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'sb-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.scss']
})
export class SellFormComponent extends FormValidationAbstract implements OnInit  {
  formGroup: FormGroup;
constructor(private fb: FormBuilder, private alertSvc: AlertService){
  super()
}

ngOnInit() {
  this.initForm();
}
  initForm() {
    this.formGroup = this.fb.group({
      name: ['', []],
    })
  }

  setErrorMessages(): void {

  }


}
