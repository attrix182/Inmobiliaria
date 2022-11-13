import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private storageService:StorageService) {}

  searchByValue(value:string) {
    return this.storageService.GetAll('properties').subscribe(properties => {
      return properties.filter(property => property.title.includes(value));
    });
  }

}
