import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() defaultColor = '';

  @Input() thirdInput=''

  constructor(private el : ElementRef) {
    console.log({el})
    console.log(this.thirdInput)
    // el.nativeElement.style.backgroundColor = 'red'
    el.nativeElement.style.padding = '10px'
    el.nativeElement.style.border = '5px solid green'
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'black');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    console.log({color})
    this.el.nativeElement.style.backgroundColor = color;
  }

}
