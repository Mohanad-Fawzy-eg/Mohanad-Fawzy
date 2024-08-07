import { Component, Input } from '@angular/core';
import { prop } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  @Input() prop!: prop;
}
