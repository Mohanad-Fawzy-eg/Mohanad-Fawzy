import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { NavbtnComponent } from '../navbtn/navbtn.component';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  selector: 'app-project-st',
  templateUrl: './project-st.component.html',
  styleUrl: './project-st.component.css',
  imports: [CommonModule, NavbtnComponent, CardComponent],
})
export class ProjectStComponent {
  @Input() title!: string;
  @Input() type!: string;
  @Input() desc!: string;
  @Input() prop!: prop;
  @Input() img!: string[];
  @Input() techStack!: any[];
  @Input() actionTitle!: string;

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
