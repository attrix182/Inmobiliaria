import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeorefService {
  constructor(private httpClient: HttpClient) {}

  getProvincias(): Observable<any> {
    return this.httpClient.get('https://apis.datos.gob.ar/georef/api/provincias');
  }

  getCiudades(idProvincia: number): Observable<any> {
    return this.httpClient.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&max=800`);
  }

  getCodigoPostal(){
    return this.httpClient.get(`https://ws.usig.buenosaires.gob.ar/datos_utiles?calle=fleming&altura=1141`);
  }


}
