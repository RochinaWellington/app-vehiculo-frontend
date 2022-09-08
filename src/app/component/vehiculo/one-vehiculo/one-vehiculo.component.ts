import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { MarcaService } from 'src/app/services/marca.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-one-vehiculo',
  templateUrl: './one-vehiculo.component.html',
  styleUrls: ['./one-vehiculo.component.css']
})
export class OneVehiculoComponent implements OnInit {
  vehiculo: Vehiculo | any ;
  marca:Marca |any;
  usuario:Usuario | any;
  letra:string='perro'
  constructor(private vehiculoService:VehiculoService,private marcaService:MarcaService,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
this.getVehiculo()
this.getMarcaByID()
this.getUsuaioByID()
  }
/**
 * * esta funcion obtien un vehiculo por id
 */
  getVehiculo(): void{
    this.vehiculoService.getOneVehiculo()
    .subscribe({
      next:(response: Vehiculo | any) =>{
        this.vehiculo=response[0]

       
      }
     })
  }

/***
 * * esta funcion obtiene la marca del vehiculo
 */
   getMarcaByID(): void{
   this.marcaService.getOneMarca()
    .subscribe({
      next:(response:  Marca| any) =>{
        this.marca=response[0]
       
      }
     })
  }
/***
 * * esta funcion obtiene el usuario o duenio del vehiculo
 */
   getUsuaioByID(): void{
   this.usuarioService.getOneUsuario()
    .subscribe({
      next:(response:  Usuario| any) =>{
        this.usuario=response[0]
       
      }
     })
  }
  
}
