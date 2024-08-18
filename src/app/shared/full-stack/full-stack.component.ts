import { Component, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { NavbtnComponent } from '../navbtn/navbtn.component';

@Component({
  standalone: true,
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrl: './full-stack.component.css',
  imports: [NavbtnComponent],
})
export class FullStackComponent {
  @Input() prop!: prop;
  @Input() title!: string;
  className: string = 'content';
}
