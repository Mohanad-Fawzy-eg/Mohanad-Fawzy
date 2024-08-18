import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CardComponent } from '../card/card.component';
import { NavbtnComponent } from '../navbtn/navbtn.component';

@Component({
  standalone: true,
  selector: 'app-superman',
  templateUrl: './superman.component.html',
  styleUrl: './superman.component.css',
  imports: [CardComponent, NavbtnComponent],
})
export class SupermanComponent {
  @Input() prop!: prop;
  animateIndex: number = 0;
  called: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.prop.animate && !this.called) {
      this.called = true;
      this.animateImg();
    }
  }

  animateImg() {
    if (this.animateIndex == 4) this.animateIndex = 0;
    else this.animateIndex += 1;

    setTimeout(() => {
      this.animateImg();
    }, 1500);
  }
}
