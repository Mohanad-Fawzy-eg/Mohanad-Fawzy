import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private ch: ChangeDetectorRef, private router: Router) {}

  mainOpacity: number = 0;
  backgroundPosition: string = 'right';
  async ngOnInit(): Promise<void> {
    this.increaseOpacity(1, 0.1);
  }
  increaseOpacity(to: number, increment: number) {
    if (this.mainOpacity < to) {
      this.mainOpacity += increment;
      setTimeout(this.increaseOpacity.bind(this), 50, to, increment);
    }
  }

  //^ Router;

  async route(route: string) {
    this.router.navigateByUrl('/about#' + route);
  }

  //? Offset variables;

  firstProp: prop = {
    top: 0,
    height: 0,
    opacity: 1,
  };

  secondProp: prop = {
    top: 0,
    height: 0,
    opacity: 0,
  };

  async ngAfterViewInit(): Promise<void> {
    this.firstProp.top = this.first?.nativeElement.offsetTop;
    this.firstProp.height = this.first?.nativeElement.offsetHeight;
    this.secondProp.top = this.second?.nativeElement.offsetTop;
    this.secondProp.height = this.second?.nativeElement.offsetTop;
    this.ch.detectChanges();
  }

  //! Animations

  @ViewChild('first') first: ElementRef | undefined;
  @ViewChild('second') second: ElementRef | undefined;

  animateFirst: boolean = false;
  animateSecond: boolean = false;
  animateThird: boolean = false;
  position: number = 0;

  topArrowOpacity: number = 0;

  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    this.position = window.scrollY;
    this.topArrowOpacity = this.position / this.secondProp.top;
    if (
      this.position > this.secondProp.top / 5 &&
      this.position < this.secondProp.top
    ) {
      this.mainOpacity = this.secondProp.top / (this.position * 5);
    } else {
      this.mainOpacity = 1;
    }

    this.animateSecond =
      this.position > this.secondProp.top &&
      this.position < this.secondProp.height + this.secondProp.top;
  }

  //^ Resize window;

  @HostListener('window:resize', ['$event'])
  async onResize() {
    this.firstProp.top = this.first?.nativeElement.offsetTop;
    this.firstProp.height = this.first?.nativeElement.offsetHeight;
    this.secondProp.top = this.second?.nativeElement.offsetTop;
    this.secondProp.height = this.second?.nativeElement.offsetHeight;
  }

  //& Top arrow calc;

  async setScroll(position: number) {
    window.scrollTo({ top: position, behavior: 'smooth' });
  }

  isNear(x: number, y: number): boolean {
    return x - y <= 1 && x - y >= -1;
  }

  calcOpacity(position: number, offsetTop: number): number {
    return offsetTop >= position ? position / offsetTop : offsetTop / position;
  }
}

interface prop {
  top: number;
  height: number;
  opacity: number;
}
