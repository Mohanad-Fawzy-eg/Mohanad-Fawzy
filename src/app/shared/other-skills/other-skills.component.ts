import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.css',
  imports: [CommonModule],
})
export class OtherSkillsComponent {
  @Input() prop?: prop;

  scroll = 2400;
  slideable: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.prop?.animate && this.scroll == 2400) {
      this.scroll = 0;
    } else if (!this.prop?.animate && this.scroll != 2400) {
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
