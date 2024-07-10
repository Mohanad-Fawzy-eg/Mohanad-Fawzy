import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NavBarComponent, FooterComponent],
})
export class HomeComponent {
  constructor() {}

  //^ Download CV

  download() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'resumeMohanadFawzy.pdf');
    link.setAttribute('download', `resumeMohanadFawzy.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  //? Scroll animation

  opacity: number = 1;
  animate: boolean = false;
  pointerEvent1: string = 'none';
  pointerEvent2: string = 'none';
  pointerEvent3: string = 'none';

  @ViewChild('overlay') overlay: ElementRef | undefined;
  @ViewChild('scrollDown') scrollDown: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    let position = window.scrollY;
    if (
      position >= this.overlay?.nativeElement.offsetHeight / 2 &&
      !this.animate
    ) {
      this.animate = true;
      this.opacity = 0;
      setTimeout(this.typing.bind(this), 7000);
      setTimeout(() => {
        this.pointerEvent1 = 'all';
      }, 7250);
      setTimeout(() => {
        this.pointerEvent2 = 'all';
      }, 8250);
      setTimeout(() => {
        this.pointerEvent3 = 'all';
      }, 9250);
    }
    this.opacity =
      1 - position / (-this.scrollDown?.nativeElement.offsetTop * 5.5);
  }

  //! Typing animation;

  myTitle: string = '';
  myTitles = [
    ' Full Stack Developer.',
    ' Tutor.',
    ' Content writer.',
    ' Freelancer.',
  ];

  wordIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;

  async typing() {
    const currentWord = this.myTitles[this.wordIndex];
    const currentChar = currentWord.substring(0, this.charIndex);
    this.myTitle = currentChar;
    if (!this.isDeleting && this.charIndex < currentWord.length) {
      this.charIndex -= -1;
      setTimeout(this.typing.bind(this), 50);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.charIndex += -1;
      setTimeout(this.typing.bind(this), 50);
    } else {
      this.isDeleting = !this.isDeleting;
      this.wordIndex = !this.isDeleting
        ? (this.wordIndex + 1) % this.myTitles.length
        : this.wordIndex;
      setTimeout(this.typing.bind(this), 1500);
    }
  }
}
