import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {


  @Input() set customIf(valor: boolean) {
    console.log({valor})
    if (valor) {
      // mostrar
        this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // ocultar
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef) { 
    console.log('constructor customIf')
    // templateRef.elementRef.nativeEleme // esto esta un nivel mas alto q elementref
  }

}
