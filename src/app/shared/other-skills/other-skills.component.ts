import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.css',
})
export class OtherSkillsComponent {
  scroll = 0;
  slideable: boolean = true;

  slide(direction: number) {
    if (this.scroll < 1400 && direction == 1 && this.slideable) {
      this.slideable = false;
      this.scroll -= -400;
      setTimeout(() => {
        this.slideable = true;
      }, 500);

      console.log(this.scroll);
    }

    if (this.scroll > 0 && direction == -1 && this.slideable) {
      this.slideable = false;
      this.scroll -= 400;

      setTimeout(() => {
        this.slideable = true;
      }, 500);
      console.log(this.scroll);
    }
  }

  slideToEnd(direction: number) {
    if (direction == 1 && this.scroll < 1400) {
      this.scroll = 1600;
    }
    if (direction == -1 && this.scroll > 0) {
      this.scroll = 0;
    }
  }
}
