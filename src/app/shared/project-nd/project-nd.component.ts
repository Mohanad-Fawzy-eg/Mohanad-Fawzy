import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-nd',
  templateUrl: './project-nd.component.html',
  styleUrl: './project-nd.component.css',
  imports: [CommonModule],
})
export class ProjectNdComponent {
  @Input() prob?: prop;

  hide: boolean = false;
  currentImg: string = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.hide) {
      this.showOrHide(false, '');
    }
  }

  showOrHide(direction: boolean, img: string) {
    if (direction) {
      this.prob?.setScroll(this.prob?.top ?? 0);
    }
    this.hide = direction;
    this.currentImg = img;
  }
}
