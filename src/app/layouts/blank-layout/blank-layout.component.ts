import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
constructor(private Render:Renderer2){}


scrollTop(){
  window.scroll({
    top:0, 
    behavior:'smooth'
  })
}
}
