import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }
  
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration=action;

  }

 }
// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor(private elem:ElementRef) { }
//    @HostListener("upvote")onClicks(){
//   this.bgColor("background-color=blue")
// }
//     private bgColor(action:string)
//   this.elem.nativeElement.style.backgroundColor='action';
// }

// }