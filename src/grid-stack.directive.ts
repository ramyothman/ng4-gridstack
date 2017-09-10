import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[gridStackDirective]'
})
export class GridStackDirective {

  constructor(private el: ElementRef) {
  }

}
