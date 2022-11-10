import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-inbox',
  templateUrl: './admin-inbox.component.html',
  styleUrls: ['./admin-inbox.component.scss'],
})
export class AdminInboxComponent implements OnInit {
  consults:any[] = [];
  constructor(private storageSvc:StorageService) {}

  getConsults(){
    this.storageSvc.GetAll('consults').subscribe(consults => {
      this.consults = consults;
      console.log(this.consults);
      this.formatContact();
    })
  }

  formatContact(){
    this.consults.forEach(consult => {
      consult.emailOrPhone.includes('@') ? consult.email = consult.emailOrPhone : consult.phone = consult.emailOrPhone;
    });

  }

  ngOnInit(): void {this.getConsults()}
}
