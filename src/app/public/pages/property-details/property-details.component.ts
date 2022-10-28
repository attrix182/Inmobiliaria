import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  prop: any;
 

  constructor
  (private storageSvc: StorageService, private location:Location) {   }

  getPropertyById(id: string) {
    this.storageSvc.GetByParameter("properties", "id", id).subscribe((p) => {
      this.prop = p[0] 
      console.log(p)
    })
  console.log(id)
  }

  ngOnInit(): void {
    this.getPropertyById(this.location.path().split('/')[2])
  }

 
}
