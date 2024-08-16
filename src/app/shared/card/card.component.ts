import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CommonModule],
})
export class CardComponent {
  @Input() title!: string;
  @Input() img!: string;
  @Input() type!: string;
  @Input() desc!: string;
  @Input() per!: number;
  @Input() animate!: boolean;
  @Input() delay!: number;

  percentage: number = 0;

  setColor(per: number): string {
    return per > 75
      ? '#408000'
      : per > 50
      ? '#008080'
      : per > 25
      ? '#ff6b6b'
      : '#800000';
  }

  inc(speed: number) {
    if (this.percentage < this.per) {
      this.percentage =
        Math.round((this.percentage + (this.per / 100) * speed) * 100) / 100;
      setTimeout(this.inc.bind(this), 10, speed);
    }
  }
}
