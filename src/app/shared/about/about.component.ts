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

  firstOffset: prop = {
    top: 0,
    height: 0,
    opacity: 1,
  };

  secondOffset: prop = {
    top: 0,
    height: 0,
    opacity: 0,
  };

  ngAfterViewInit(): void {
    this.firstOffset.top = this.first?.nativeElement.offsetTop;
    this.firstOffset.height = this.first?.nativeElement.offsetHeight;
    this.secondOffset.top = this.second?.nativeElement.offsetTop;
    this.secondOffset.height = this.second?.nativeElement.offsetTop;
    this.ch.detectChanges();
  }

  //! Animations

  @ViewChild('first') first: ElementRef | undefined;
  @ViewChild('second') second: ElementRef | undefined;

  animateFirst: boolean = false;
  animateSecond: boolean = false;
  animateThird: boolean = false;
  position: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.position = window.scrollY;
    this.secondOffset.opacity = this.calcOpacity(
      this.position,
      this.secondOffset.top
    );
    console.log(this.calcOpacity(this.position, this.secondOffset.top));
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
