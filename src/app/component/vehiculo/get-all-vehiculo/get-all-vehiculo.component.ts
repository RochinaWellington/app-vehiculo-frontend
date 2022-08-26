import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-get-all-vehiculo',
  templateUrl: './get-all-vehiculo.component.html',
  styleUrls: ['./get-all-vehiculo.component.css']
})
export class GetAllVehiculoComponent implements OnInit {
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