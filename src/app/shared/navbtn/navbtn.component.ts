import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbtn',
  templateUrl: './navbtn.component.html',
  styleUrl: './navbtn.component.css',
})
export class NavbtnComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Input() bgColor!: string;
  @Input() route!: number;

  constructor() {}

  tempC: string = this.color;
  tempbgC: string = this.bgColor;

  ngOnInit(): void {
    this.tempC = this.color;
    this.tempbgC = this.bgColor;
  }

  async scroll() {
    window.scrollTo({ top: this.route, behavior: 'smooth' });
  }
}
