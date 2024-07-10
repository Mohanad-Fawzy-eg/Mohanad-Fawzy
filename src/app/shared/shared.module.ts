import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { FrontEndSkillsComponent } from './front-end-skills/front-end-skills.component';

@NgModule({
  imports: [
    CommonModule,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    FullStackComponent,
    FrontEndSkillsComponent,
  ],
  exports: [
    NavBarComponent,
    MatIconModule,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    FullStackComponent,
    FrontEndSkillsComponent,
  ],
})
export class SharedModule {}
