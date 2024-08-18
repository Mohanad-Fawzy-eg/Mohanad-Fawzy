import { Component, Input } from '@angular/core';
import { NavbtnComponent } from '../navbtn/navbtn.component';
import { prop } from '../about/about.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [NavbtnComponent],
})
export class ContactComponent {
  @Input() prop!: prop;
}
