import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[customTheme]'
})
export class CustomThemeDirective implements AfterViewInit {
  @Input() custom_color!: string;
  @Input() custom_size!: string;
  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    this.custom_color = this.custom_color || 'green';
    this.custom_size = this.custom_size || '20px';
    this.elementRef.nativeElement.style.color = this.custom_color;
    this.elementRef.nativeElement.style.fontSize = this.custom_size;
  }
}
