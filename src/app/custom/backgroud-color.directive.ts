import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroudColor]'
})
export class BackgroudColorDirective {

  constructor(private element: ElementRef) {
    this.element = element;
  }

  ngOnInit(){
    console.log("inside ng on init")
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
