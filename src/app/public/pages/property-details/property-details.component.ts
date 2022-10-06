import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sb-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
propiedad: any;

  constructor(private storageSvc: StorageService) {  }

  getPropertyById(id:string){
    this.storageSvc.GetByParameter("properties","id",id).subscribe((p)=>{this.propiedad=p[0]})
  }

  ngOnInit(): void {
    this.getPropertyById("1")
  }
  

}
