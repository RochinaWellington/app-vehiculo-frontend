import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllVehiculoComponent } from './component/vehiculo/get-all-vehiculo/get-all-vehiculo.component';

const routes: Routes = [
 {
  path:'',
  component:GetAllVehiculoComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
