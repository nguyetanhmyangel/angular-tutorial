import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[customDefaultColorOnEvent]'
})
export class CustomDefaultColorOnEventDirective {
  constructor(private elementRef: ElementRef) {
  }
  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }
  private changeColor(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }
}
