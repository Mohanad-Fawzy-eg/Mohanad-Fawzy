import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { FullStackComponent } from '../full-stack/full-stack.component';
import { FrontEndSkillsComponent } from '../front-end-skills/front-end-skills.component';
@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [FullStackComponent, FrontEndSkillsComponent],
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

  private static sec1prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
  };

  private static sec2prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
  };

  private static sec3prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
  };

  public get getsec1prop(): prop {
    return AboutComponent.sec1prop;
  }
  public get getsec2prop(): prop {
    return AboutComponent.sec2prop;
  }
  public get getsec3prop(): prop {
    return AboutComponent.sec3prop;
  }

  async ngAfterViewInit(): Promise<void> {
    AboutComponent.sec1prop.top = this.sec1?.nativeElement.offsetTop;
    AboutComponent.sec1prop.height = this.sec1?.nativeElement.offsetHeight;
    AboutComponent.sec2prop.top = this.sec2?.nativeElement.offsetTop;
    AboutComponent.sec2prop.height =
      this.sec2?.nativeElement.offsetHeight +
      this.sec2?.nativeElement.offsetTop;
    AboutComponent.sec3prop.top = this.sec3?.nativeElement.offsetTop;
    AboutComponent.sec3prop.height =
      this.sec3?.nativeElement.offsetHeight +
      this.sec3?.nativeElement.offsetTop;
    this.ch.detectChanges();
  }

  //! Animations

  position: number = 0;

  @ViewChild('first') sec1: ElementRef | undefined;
  @ViewChild('second') sec2: ElementRef | undefined;
  @ViewChild('third') sec3: ElementRef | undefined;

  animateFirst: boolean = false;

  topArrowOpacity: number = 0;
  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    this.position = window.scrollY;
    this.topArrowOpacity = this.position / AboutComponent.sec1prop.height;
    if (
      this.position > AboutComponent.sec1prop.height / 5 &&
      this.position < AboutComponent.sec1prop.height
    ) {
      this.mainOpacity = AboutComponent.sec1prop.height / (this.position * 5);
    } else {
      this.mainOpacity = 1;
    }

    AboutComponent.sec2prop.animate =
      this.position > AboutComponent.sec2prop.top * 0.6;
    AboutComponent.sec3prop.animate =
      this.position > AboutComponent.sec3prop.top * 0.6;
  }

  //^ Resize window;

  @HostListener('window:resize', ['$event'])
  async onResize() {
    AboutComponent.sec1prop.top = this.sec1?.nativeElement.offsetTop;
    AboutComponent.sec1prop.height = this.sec1?.nativeElement.offsetHeight;
    AboutComponent.sec2prop.top = this.sec2?.nativeElement.offsetTop;
    AboutComponent.sec2prop.height =
      this.sec2?.nativeElement.offsetHeight +
      this.sec2?.nativeElement.offsetTop;
    AboutComponent.sec3prop.top = this.sec3?.nativeElement.offsetTop;
    AboutComponent.sec3prop.height =
      this.sec3?.nativeElement.offsetHeight +
      this.sec3?.nativeElement.offsetTop;
  }

  //& Top arrow calc;

  @HostListener('window', ['$event'])
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

export interface prop {
  top: number;
  height: number;
  opacity: number;
  animate: boolean;
}
