import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() show = new EventEmitter<boolean>();
  @Output() showenImg = new EventEmitter<string>();

  hide: boolean = false;
  currentImg: string = '';

  showOrHide(direction: boolean, recived: string) {
    this.hide = direction;
    this.currentImg = recived;
    this.show.emit(this.hide);
    this.showenImg.emit(recived);
  }
}
