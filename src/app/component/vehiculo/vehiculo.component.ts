import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
vehiculos:Vehiculo[]=[];

  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getAllVehiculo()
    .subscribe({
      next: (vehiculo) => {
        this.vehiculos=vehiculo;
        console.log(vehiculo)
        
      },
      error: (response) =>{
        console.log(response)
      }
      
    })

  }

}
