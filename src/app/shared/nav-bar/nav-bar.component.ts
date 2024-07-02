import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [MatIconModule],
})
export class NavBarComponent {
  [x: string]: any;
  imgsrc = 'MESUP.png';

  toggle: boolean = false;
  navigating: boolean = false;

  message: string =
    'Hello Mohaanad, I wold like to contact you for hiering or further information, thank you.';

  constructor(private router: Router) {}

  clicked() {
    this.toggle = !this.toggle;
  }

  async route(route: string) {
    this.router.navigateByUrl('/' + route).then(() => {
      this.toggle = false;
    });
  }
}
