import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });
  public texto: string = 'Adrian'
  public color: string = 'green'
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}


  tieneError(campo: string):boolean{
    return this.formulario.get(campo)?.invalid || false
  }

  cambiaNombre(){
    // this.texto = 'juan carlos'
    this.texto = Math.random().toString()
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color
  }
}
