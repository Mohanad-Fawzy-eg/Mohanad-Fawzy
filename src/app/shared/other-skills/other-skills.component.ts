import { Component, HostListener, Input } from '@angular/core';
import { prop } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NavbtnComponent } from '../navbtn/navbtn.component';

@Component({
  standalone: true,
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.css',
  imports: [CommonModule, CardComponent, NavbtnComponent],
})
export class OtherSkillsComponent {
  @Input() prop!: prop;

  scroll = 2400;
  slideable: boolean = true;

  n: number = 0;

  skills = [
    {
      title: 'Java',
      img: 'java',
      type: 'language',
      per: 80,
      delay: 0,
    },
    {
      title: 'Python',
      img: 'py',
      type: 'language',
      per: 60,
      delay: 0.125,
    },
    {
      title: 'C++',
      img: 'cpp',
      type: 'language',
      per: 30,
      delay: 0.25,
    },
    {
      title: 'C#',
      img: 'csh',
      type: 'language',
      per: 30,
      delay: 0.375,
    },
    {
      title: 'Dart',
      img: 'dart',
      type: 'language',
      per: 30,
      delay: 0.5,
    },
    {
      title: 'Kotlin',
      img: 'kot',
      type: 'language',
      per: 51,
      delay: 0.625,
    },
    {
      title: 'Git',
      img: 'git',
      type: 'Version Control',
      per: 76,
      delay: 0.75,
    },
    {
      title: 'Github',
      img: 'github',
      type: 'Version Control',
      per: 76,
      delay: 0.875,
    },
    {
      title: 'EJS',
      img: 'ejs',
      type: 'Templating',
      per: 100,
      delay: 1,
    },
    {
      title: 'Sass',
      img: 'sass',
      type: 'Preprocessing',
      per: 30,
      delay: 1.125,
    },
    {
      title: 'Tailwind',
      img: 'tw',
      type: 'Style',
      per: 80,
      delay: 1.25,
    },
    {
      title: 'Bootstrap',
      img: 'boot',
      type: 'Style',
      per: 80,
      delay: 1.375,
    },
    {
      title: 'Flutter',
      img: 'flutter',
      type: 'Mobile',
      per: 51,
      delay: 1.5,
    },

    {
      title: 'Next.js',
      img: 'next',
      type: 'Framework',
      per: 30,
      delay: 1.625,
    },
    {
      title: 'React',
      img: 'react',
      type: 'Frontend',
      per: 20,
      delay: 1.75,
    },
    {
      title: 'Vite.js',
      img: 'vite',
      type: 'Framework',
      per: 25,
      delay: 1.875,
    },
    {
      title: 'Vue.js',
      img: 'vue',
      type: 'Frontend',
      per: 20,
      delay: 2,
    },
    {
      title: 'Webpack',
      img: 'web',
      type: 'Build Tools',
      per: 51,
      delay: 2.125,
    },

    {
      title: 'Firebase',
      img: 'firebase',
      type: 'Database',
      per: 30,
      delay: 2.25,
    },

    {
      title: 'PostgreSQL',
      img: 'postql',
      type: 'Database',
      per: 30,
      delay: 2.375,
    },

    {
      title: ' Jupyter',
      img: 'jl',
      type: 'Notebook',
      per: 80,
      delay: 2.5,
    },

    {
      title: 'TensorFlow',
      img: 'tf',
      type: 'Machine Learning',
      per: 20,
      delay: 2.625,
    },

    {
      title: 'Unreal',
      img: 'ue4',
      type: 'Game Engine',
      per: 65,
      delay: 2.75,
    },
    {
      title: 'Unity',
      img: 'unity',
      type: 'Game Engine',
      per: 51,
      delay: 2.875,
    },
  ];
}
