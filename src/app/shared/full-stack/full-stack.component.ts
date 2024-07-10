import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent, prop } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrl: './full-stack.component.css',
})
export class FullStackComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {}

  about: AboutComponent = new AboutComponent(this.ch, this.router);

  position: number = 0;

  fsContent: prop = {
    top: 0,
    height: 0,
    opacity: 1,
  };

  @ViewChild('content') content: ElementRef | undefined;

  async ngAfterViewInit(): Promise<void> {
    this.fsContent.top = this.content?.nativeElement.offsetTop;
    this.fsContent.height =
      this.content?.nativeElement.offsetHeight +
      this.content?.nativeElement.offsetTop;
    this.ch.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.fsContent.top = this.content?.nativeElement.offsetTop;
    this.fsContent.height =
      this.content?.nativeElement.offsetHeight +
      this.content?.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.position = window.scrollY;
    if (
      this.position > this.fsContent.top * 0.8 &&
      this.position < this.fsContent.height * 0.8 &&
      this.canType
    ) {
      setTimeout(
        this.type1.bind(this),
        3000,
        'I am a full-stack developer',
        0,
        true
      );
      this.canType = false;
    }
  }

  text1: string = '';
  text2: string = '';

  canType: boolean = true;

  type1(txt: string, charIndex: number = 0, can: boolean) {
    let char = txt.charAt(charIndex);
    if (charIndex <= txt.length && can) {
      this.canType = false;
      this.text1 += char;
      setTimeout(this.type1.bind(this), 50, txt, charIndex + 1, true);
    }
  }
}
