import { CardComponent } from './../card/card.component';
import { Component, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { NavbtnComponent } from '../navbtn/navbtn.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
  imports: [CommonModule, CardComponent, NavbtnComponent],
})
export class StackComponent {
  @Input() prop!: prop;
  stack1 = [
    {
      title: 'Angular',
      img: 'ng',
      per: 76,
      delay: 0.125,
    },
    {
      title: 'TypeScript',
      img: 'ts',
      per: 76,
      delay: 0.25,
    },
    {
      title: 'Express.js',
      img: 'exp',
      per: 80,
      delay: 0.375,
    },
    {
      title: 'Node.js',
      img: 'node',
      per: 80,
      delay: 0.5,
    },
    {
      title: 'MongoDB',
      img: 'mongo',
      per: 80,
      delay: 0.625,
    },
  ];
  stack2 = [
    {
      title: 'Next.js',
      img: 'next',
      per: 30,
      delay: 0.75,
    },
    {
      title: 'React.js',
      img: 'react',
      per: 30,
      delay: 0.875,
    },
    {
      title: 'Vite.js',
      img: 'vite',
      per: 30,
      delay: 1,
    },
    {
      title: 'TypeScript',
      img: 'ts',
      per: 76,
      delay: 1.125,
    },
    {
      title: 'Express.js',
      img: 'exp',
      per: 80,
      delay: 1.25,
    },
    {
      title: 'Node.js',
      img: 'node',
      per: 80,
      delay: 1.375,
    },
    {
      title: 'PostgreSQL',
      img: 'postql',
      per: 30,
      delay: 1.5,
    },
  ];
}
