import { Component, HostListener, Input } from '@angular/core';

import { prop } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrl: './full-stack.component.css',
})
export class FullStackComponent {
  @Input() prop?: prop;
  className: string = 'content';

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    this.className = this.prop?.animate ? 'content animate' : 'content';
  }
}
