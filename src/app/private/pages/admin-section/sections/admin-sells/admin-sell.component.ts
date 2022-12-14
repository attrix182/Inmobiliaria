import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-admin-sell',
  templateUrl: './admin-sell.component.html',
  styleUrls: ['./admin-sell.component.scss']
})
export class AdminSellComponent implements OnInit {
  consults: any[] = [];
  filter:boolean = false;
  loading: boolean = false;
  constructor(private storageSvc: StorageService) {}

  getConsults() {
    this.loading = true;
    this.storageSvc.GetAll('sell-contact').subscribe((consults) => {
      this.consults = consults;
      console.log(this.consults);
      this.loading = false;
    });
  }


  markAsRead(consult: any) {
    if (consult.read) {
      this.storageSvc.Update(consult.id, 'sell-contact', { read: false }).then(() => {
        consult.read = false;
      });
    } else {
      this.storageSvc.Update(consult.id, 'sell-contact', { read: true }).then(() => {
          consult.read = true;
      });
    }
  }

  setFilter(state:boolean){
    this.filter = state;
  }

  ngOnInit(): void {
    this.getConsults();
  }
}
