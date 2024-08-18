import { Component, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { NavbtnComponent } from '../navbtn/navbtn.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrl: './rest.component.css',
  imports: [NavbtnComponent, CardComponent, CommonModule],
})
export class RestComponent {
  @Input() prop!: prop;

  set1 = [
    {
      title: 'Photoshop',
      img: 'psd',
      type: 'gd',
      per: 90,
      delay: 0.5,
    },
    {
      title: 'Illustrator',
      img: 'ai',
      type: 'gd',
      per: 76,
      delay: 0.75,
    },
    {
      title: 'InDesign',
      img: 'id',
      type: 'gd',
      per: 50,
      delay: 1,
    },
  ];

  set2 = [
    {
      title: 'Capcut',
      img: 'cap',
      per: 90,
      delay: 1.25,
    },
    {
      title: 'Vegas Pro',
      img: 'veg',
      per: 60,
      delay: 1.5,
    },
  ];

  set3 = [
    {
      title: 'Excel',
      img: 'xlm',
      per: 90,
      delay: 1.75,
    },
    {
      title: 'Access',
      img: 'acc',
      per: 60,
      delay: 2,
    },
    {
      title: 'Powerpoint',
      img: 'ppt',
      per: 100,
      delay: 2.25,
    },
    {
      title: 'Word',
      img: 'dox',
      per: 100,
      delay: 2.5,
    },
  ];
}
