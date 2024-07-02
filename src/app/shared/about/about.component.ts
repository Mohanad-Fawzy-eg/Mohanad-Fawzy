import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor() {}

  opacity: number = 0;
  ngOnInit(): void {
    this.increaseOpacity(1, 0.01);
  }
  increaseOpacity(to: number, increment: number) {
    if (this.opacity < to) {
      this.opacity += increment;
      setTimeout(this.increaseOpacity.bind(this), 50, to, increment);
    }
  }
}
