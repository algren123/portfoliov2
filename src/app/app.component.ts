import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-v2';
  constructor(@Inject(DOCUMENT) document, r: Renderer2) {
    r.addClass(document.body, 'l-body');
  }
}
