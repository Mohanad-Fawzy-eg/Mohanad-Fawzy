import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-st',
  templateUrl: './project-st.component.html',
  styleUrl: './project-st.component.css',
  imports: [CommonModule],
})
export class ProjectStComponent {
  @Input() prop!: prop;

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
      this.prop.setScroll(this.prop.top);
    }
    this.hide = direction;
    this.currentImg = img;
  }
}
