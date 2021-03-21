import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[err-msg]',
})
export class ErrMsgDirective implements OnInit, OnChanges {
  public htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';
  // @Input() color: string = 'red';
  // @Input() mensaje: string = 'Este campo es cesario';
  @Input() set color(valor: string) {
    console.log({ valor });
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    // console.log({valor})
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMsj();
    // console.log(this._mensaje)
  }

  @Input() set valido(valor: boolean) {
    // console.log({valor})
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden')      
    }else {
      this.htmlElement.nativeElement.classList.remove('hidden')      

    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Contructor directive');
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes.color) {
    //   const color = changes.color.currentValue
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log({changes})
  }

  ngOnInit() {
    console.log('oninit directive');
    // console.log(this.color); // undefined
    // console.log(this.mensaje);//undefined
    // console.log({el: this.el})
    // this.htmlElement = this.el
    // this.htmlElement.nativeElement.style.color='blue'
    this.setColor();
    this.setMsj();
    this.setStyle();
  }

  setStyle() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    // this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMsj() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
