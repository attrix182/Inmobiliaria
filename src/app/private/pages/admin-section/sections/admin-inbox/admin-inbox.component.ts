import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-inbox',
  templateUrl: './admin-inbox.component.html',
  styleUrls: ['./admin-inbox.component.scss']
})
export class AdminInboxComponent implements OnInit {
  consults: any[] = [];
  filter:boolean = false;
  loading: boolean = false;
  constructor(private storageSvc: StorageService) {}

  getConsults() {
    this.loading = true;
    this.storageSvc.GetAll('consults').subscribe((consults) => {
      this.consults = consults;
      console.log(this.consults);
      this.formatContact();
    });
  }

  formatContact() {
    this.consults.forEach((consult) => {
      consult.emailOrPhone.includes('@')
        ? (consult.email = consult.emailOrPhone)
        : (consult.phone = consult.emailOrPhone);
    });
    this.loading = false;
  }

  markAsRead(consult: any) {
    this.storageSvc.Update(consult.id, 'consults', { read: true }).then(() => {
      consult.read = true;
    });
  }

  setFilter(state:boolean){
    this.filter = state;
  }

  ngOnInit(): void {
    this.getConsults();
  }
}
