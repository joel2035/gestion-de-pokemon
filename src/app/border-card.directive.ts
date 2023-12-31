import {Directive, ElementRef, HostListener, Input,} from '@angular/core';
@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private  initiialColor:string = '#F5F5F5';
  private  defaultColor:string='#009688';
  private defaultHeight: number= 190;
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initiialColor);
  }
  @Input('pokemonBorderCard') borderColor:string;
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder( this.borderColor ||this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#F5F5F5');
  }
  setHeight(height:number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color:string){
    let border:string = "solid 4px" + color
    this.el.nativeElement.style.border = border;
  }
}
