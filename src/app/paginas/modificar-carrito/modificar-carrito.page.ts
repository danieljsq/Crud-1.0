import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutomovilPartial } from 'src/app/modelo/automovil';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-modificar-carrito',
  templateUrl: './modificar-carrito.page.html',
  styleUrls: ['./modificar-carrito.page.scss'],
})
export class ModificarCarritoPage implements OnInit {
  public idActiva = '';
  public AutoActivo!: AutomovilPartial;
  public formulario: FormGroup;
  public cargaArchivo = false;


  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private ApiCarrito: CarritoService,
    private fb: FormBuilder
  ) {
    this.construirFormulario();
  }
  public construirFormulario(): void {
    this.formulario = this.fb.group({
      cantidad: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }
  public obtenerCampo(control: string) {
    return this.formulario.get(control);
  }
  public fueTocado(control: string) {
    return this.formulario.get(control).touched;
  }
  public estaSucio(control: string) {
    return this.formulario.get(control).dirty;
  }
  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(pararametros => {
      this.idActiva = pararametros.get('idAuto');
      this.ApiCarrito.buscarPorIDCarrito(+this.idActiva)
        .subscribe(elemento => {
          this.AutoActivo = elemento;
          this.formulario.get('cantidad').setValue(elemento.cantidad);
          this.formulario.updateValueAndValidity();
        })
    })
  }

  public modificarAutoCarrito(){
    if(this.formulario.invalid && this.cargaArchivo){
      this.formulario.markAllAsTouched();
      return;
    }
    this.ApiCarrito.modificarPorIDCarrito(+this.idActiva,{
      ...this.formulario.value
    })
    .subscribe(respuesta => {
      if(respuesta){
        console.log('Cantidad Actualizado :D');
        this.router.navigate(['listar-carrito']);
      }
    })
  }
}
