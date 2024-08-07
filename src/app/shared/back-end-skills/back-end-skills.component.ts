import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-back-end-skills',
  templateUrl: './back-end-skills.component.html',
  styleUrl: './back-end-skills.component.css',
})
export class BackEndSkillsComponent {
  @Input() prop?: prop;

  node: number = 0;
  exp: number = 0;
  mongo: number = 0;

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    if (this.prop?.animate && this.node == 0) {
      this.fillBar(1);
    } else if (!this.prop?.animate && this.node == 90) {
      this.emptyBar();
    }
  }

  fillBar(speed: number) {
    if (this.node < 90) {
      this.node = Math.round((this.node + (90 / 100) * speed) * 100) / 100;
      this.exp = Math.round((this.exp + (90 / 100) * speed) * 100) / 100;
      this.mongo = Math.round((this.mongo + (80 / 100) * speed) * 100) / 100;
      setTimeout(this.fillBar.bind(this), 15, speed);
    }
  }

  emptyBar() {
    this.node = 0;
    this.exp = 0;
    this.mongo = 0;
  }
}
