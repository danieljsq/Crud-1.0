import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarCarritoPage } from './modificar-carrito.page';
import { CarritoService } from 'src/app/services/carrito.service';


const routes: Routes = [
  {
    path: '',
    component: ModificarCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule, ReactiveFormsModule],
  providers: [CarritoService]
})
export class ModificarCarritoPageRoutingModule {}
