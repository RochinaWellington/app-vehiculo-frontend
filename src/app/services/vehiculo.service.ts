import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseApiUrl:String='https://pruebaconceptobd.herokuapp.com'
  constructor(private http:HttpClient ) { }

  getAllVehiculo(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.baseApiUrl+'/vehiculo')

  }

}
