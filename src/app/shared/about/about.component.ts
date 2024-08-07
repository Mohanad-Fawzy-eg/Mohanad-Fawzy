import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { FullStackComponent } from '../full-stack/full-stack.component';
import { FrontEndSkillsComponent } from '../front-end-skills/front-end-skills.component';
import { BackEndSkillsComponent } from '../back-end-skills/back-end-skills.component';
import { OtherSkillsComponent } from '../other-skills/other-skills.component';
import { StackComponent } from '../stack/stack.component';
import { ProjectStComponent } from '../project-st/project-st.component';
import { ProjectNdComponent } from '../project-nd/project-nd.component';
@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [
    FullStackComponent,
    FrontEndSkillsComponent,
    BackEndSkillsComponent,
    OtherSkillsComponent,
    StackComponent,
    ProjectStComponent,
    ProjectNdComponent,
  ],
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

  sec1prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec2prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec3prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec4prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec5prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec6prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec7prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  sec8prop: prop = {
    top: 0,
    height: 0,
    opacity: 1,
    animate: false,
    setScroll: function (position: number): void {
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
  };

  async ngAfterViewInit(): Promise<void> {
    this.sec1prop.top = this.sec1?.nativeElement.offsetTop;
    this.sec1prop.height = this.sec1?.nativeElement.offsetHeight;
    this.sec2prop.top = this.sec2?.nativeElement.offsetTop;
    this.sec2prop.height =
      this.sec2?.nativeElement.offsetHeight +
      this.sec2?.nativeElement.offsetTop;
    this.sec3prop.top = this.sec3?.nativeElement.offsetTop;
    this.sec3prop.height =
      this.sec3?.nativeElement.offsetHeight +
      this.sec3?.nativeElement.offsetTop;
    this.sec4prop.top = this.sec4?.nativeElement.offsetTop;
    this.sec4prop.height =
      this.sec4?.nativeElement.offsetHeight +
      this.sec4?.nativeElement.offsetTop;
    this.sec5prop.top = this.sec5?.nativeElement.offsetTop;
    this.sec5prop.height =
      this.sec5?.nativeElement.offsetHeight +
      this.sec5?.nativeElement.offsetTop;
    this.sec6prop.top = this.sec6?.nativeElement.offsetTop;
    this.sec6prop.height =
      this.sec6?.nativeElement.offsetHeight +
      this.sec6?.nativeElement.offsetTop;
    this.sec7prop.top = this.sec7?.nativeElement.offsetTop;
    this.sec7prop.height =
      this.sec7?.nativeElement.offsetHeight +
      this.sec7?.nativeElement.offsetTop;
    this.sec8prop.top = this.sec8?.nativeElement.offsetTop;
    this.sec8prop.height =
      this.sec8?.nativeElement.offsetHeight +
      this.sec8?.nativeElement.offsetTop;
    this.ch.detectChanges();
  }

  //! Animations

  position: number = 0;

  @ViewChild('sec1') sec1: ElementRef | undefined;
  @ViewChild('sec2') sec2: ElementRef | undefined;
  @ViewChild('sec3') sec3: ElementRef | undefined;
  @ViewChild('sec4') sec4: ElementRef | undefined;
  @ViewChild('sec5') sec5: ElementRef | undefined;
  @ViewChild('sec6') sec6: ElementRef | undefined;
  @ViewChild('sec7') sec7: ElementRef | undefined;
  @ViewChild('sec8') sec8: ElementRef | undefined;

  animateFirst: boolean = false;

  topArrowOpacity: number = 0;
  @HostListener('window:scroll', ['$event'])
  async onScroll(event: any) {
    this.position = window.scrollY;

    this.topArrowOpacity = this.position / this.sec1prop.height;
    if (this.sec1prop.opacity > 0 || this.position < this.sec2prop.top) {
      this.sec1prop.opacity = Math.abs(
        1 - this.position / this.sec1prop.height
      );
    }

    this.sec2prop.animate = this.position > this.sec2prop.top * 0.6;
    this.sec3prop.animate = this.position > this.sec3prop.top * 0.6;
    this.sec4prop.animate = this.position > this.sec4prop.top * 0.8;
    this.sec5prop.animate = this.position > this.sec5prop.top * 0.8;
    this.sec6prop.animate = this.position > this.sec6prop.top * 0.8;
    this.sec7prop.animate = this.position > this.sec7prop.top * 0.8;
    this.sec8prop.animate = this.position > this.sec8prop.top * 0.8;
  }

  //^ Resize window;

  @HostListener('window:resize', ['$event'])
  async onResize() {
    this.sec1prop.top = this.sec1?.nativeElement.offsetTop;
    this.sec1prop.height = this.sec1?.nativeElement.offsetHeight;
    this.sec2prop.top = this.sec2?.nativeElement.offsetTop;
    this.sec2prop.height =
      this.sec2?.nativeElement.offsetHeight +
      this.sec2?.nativeElement.offsetTop;
    this.sec3prop.top = this.sec3?.nativeElement.offsetTop;
    this.sec3prop.height =
      this.sec3?.nativeElement.offsetHeight +
      this.sec3?.nativeElement.offsetTop;
    this.sec4prop.top = this.sec4?.nativeElement.offsetTop;
    this.sec4prop.height =
      this.sec4?.nativeElement.offsetHeight +
      this.sec4?.nativeElement.offsetTop;
    this.sec5prop.top = this.sec5?.nativeElement.offsetTop;
    this.sec5prop.height =
      this.sec5?.nativeElement.offsetHeight +
      this.sec5?.nativeElement.offsetTop;
    this.sec6prop.top = this.sec6?.nativeElement.offsetTop;
    this.sec6prop.height =
      this.sec6?.nativeElement.offsetHeight +
      this.sec6?.nativeElement.offsetTop;
    this.sec7prop.top = this.sec7?.nativeElement.offsetTop;
    this.sec7prop.height =
      this.sec7?.nativeElement.offsetHeight +
      this.sec7?.nativeElement.offsetTop;
    this.sec8prop.top = this.sec8?.nativeElement.offsetTop;
    this.sec8prop.height =
      this.sec8?.nativeElement.offsetHeight +
      this.sec8?.nativeElement.offsetTop;
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
  setScroll: (position: number) => void;
}
