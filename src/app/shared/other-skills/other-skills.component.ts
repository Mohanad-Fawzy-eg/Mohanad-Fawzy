import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.css',
  imports: [CommonModule],
})
export class OtherSkillsComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {}
  scroll = 2400;
  slideable: boolean = true;

  about = new AboutComponent(this.ch, this.router);

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.about.getsec5prop.animate && this.scroll == 2400) {
      this.scroll = 0;
    } else if (!this.about.getsec5prop.animate && this.scroll != 2400) {
      this.scroll = 2400;
    }
  }

  slide(direction: number) {
    if (this.scroll < 2300 && direction == 1 && this.slideable) {
      this.slideable = false;
      this.scroll = this.scroll == 2000 ? this.scroll + 300 : this.scroll + 400;
      setTimeout(() => {
        this.slideable = true;
      }, 500);
    }

    if (this.scroll > 0 && direction == -1 && this.slideable) {
      this.slideable = false;
      this.scroll = this.scroll == 2300 ? this.scroll - 300 : this.scroll - 400;

      setTimeout(() => {
        this.slideable = true;
      }, 500);
    }
  }

  slideToEnd(direction: number) {
    if (direction == 1 && this.scroll < 2300) {
      this.scroll = 2300;
    }
    if (direction == -1 && this.scroll > 0) {
      this.scroll = 0;
    }
  }
}
