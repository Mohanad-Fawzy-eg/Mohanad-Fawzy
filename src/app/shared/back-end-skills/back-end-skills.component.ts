import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-back-end-skills',
  templateUrl: './back-end-skills.component.html',
  styleUrl: './back-end-skills.component.css',
})
export class BackEndSkillsComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {}
  about = new AboutComponent(this.ch, this.router);

  node: number = 0;
  mongo: number = 0;
  firebase: number = 0;

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    if (this.about.getsec4prop.animate && this.node == 0) {
      this.fillBar(1);
    } else if (!this.about.getsec4prop.animate && this.node == 90) {
      this.emptyBar();
    }
  }

  fillBar(speed: number) {
    if (this.node < 90) {
      this.node = Math.round((this.node + (90 / 100) * speed) * 100) / 100;
      this.mongo = Math.round((this.mongo + (80 / 100) * speed) * 100) / 100;
      this.firebase =
        Math.round((this.firebase + (30 / 100) * speed) * 100) / 100;
      setTimeout(this.fillBar.bind(this), 10, speed);
    }
  }

  emptyBar() {
    this.node = 0;
    this.mongo = 0;
    this.firebase = 0;
  }
}
