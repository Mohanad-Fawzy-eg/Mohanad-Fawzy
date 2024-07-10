import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrl: './full-stack.component.css',
})
export class FullStackComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {
    this.about = new AboutComponent(this.ch, this.router);
  }

  about: AboutComponent = new AboutComponent(this.ch, this.router);
  className: string = 'content';

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    this.className = this.about.getsec2prop.animate
      ? 'content animate'
      : 'content';
  }
}
