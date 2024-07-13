import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-front-end-skills',
  templateUrl: './front-end-skills.component.html',
  styleUrl: './front-end-skills.component.css',
})
export class FrontEndSkillsComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {}
  about: AboutComponent = new AboutComponent(this.ch, this.router);

  js: number = 0;
  ts: number = 0;
  jq: number = 0;
  ng: number = 0;
  ft: number = 0;
  vu: number = 0;

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    if (this.about.getsec3prop.animate && this.js == 0) {
      this.fillBar(1);
    } else if (!this.about.getsec3prop.animate && this.js == 90) {
      this.emptyBar();
    }
  }

  fillBar(speed: number) {
    if (this.js < 90) {
      this.js = Math.round((this.js + (90 / 100) * speed) * 100) / 100;
      this.ts = Math.round((this.ts + (70 / 100) * speed) * 100) / 100;
      this.jq = Math.round((this.jq + (50 / 100) * speed) * 100) / 100;
      this.ng = Math.round((this.ng + (60 / 100) * speed) * 100) / 100;
      this.ft = Math.round((this.ft + (30 / 100) * speed) * 100) / 100;
      this.vu = Math.round((this.vu + (20 / 100) * speed) * 100) / 100;
      setTimeout(this.fillBar.bind(this), 10, speed);
    }
  }

  emptyBar() {
    this.js = 0;
    this.ts = 0;
    this.jq = 0;
    this.ng = 0;
    this.ft = 0;
    this.vu = 0;
  }
}
