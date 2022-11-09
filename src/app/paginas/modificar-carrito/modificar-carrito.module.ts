import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';
import { ModificarCarritoPageRoutingModule } from './modificar-carrito-routing.module';

import { ModificarCarritoPage } from './modificar-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCarritoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ModificarCarritoPage],
  providers: [CarritoService]
})
export class ModificarCarritoPageModule {}
