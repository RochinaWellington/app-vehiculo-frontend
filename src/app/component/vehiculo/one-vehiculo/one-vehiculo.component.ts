import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-one-vehiculo',
  templateUrl: './one-vehiculo.component.html',
  styleUrls: ['./one-vehiculo.component.css']
})
export class OneVehiculoComponent implements OnInit {
  vehiculo: Vehiculo | any ;
  letra:string='perro'
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
this.getVehiculo()
  }
  getVehiculo(): void{
    this.vehiculoService.getOneVehiculo()
    .subscribe({
      next:(response: Vehiculo | any) =>{
        this.vehiculo=response[0]

       
      }
     })
  }
}
