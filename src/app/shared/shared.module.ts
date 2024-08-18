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
import { BackEndSkillsComponent } from './back-end-skills/back-end-skills.component';
import { OtherSkillsComponent } from './other-skills/other-skills.component';
import { StackComponent } from './stack/stack.component';
import { ProjectStComponent } from './project-st/project-st.component';
import { ProjectNdComponent } from './project-nd/project-nd.component';
import { NavbtnComponent } from './navbtn/navbtn.component';
import { CardComponent } from './card/card.component';
import { StPageComponent } from './st-page/st-page.component';
import { SupermanComponent } from './superman/superman.component';
import { RestComponent } from './rest/rest.component';
import { ContactComponent } from './contact/contact.component';

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
    BackEndSkillsComponent,
    OtherSkillsComponent,
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
    BackEndSkillsComponent,
    OtherSkillsComponent,
  ],
  declarations: [
    StackComponent,
    ProjectStComponent,
    ProjectNdComponent,
    NavbtnComponent,
    CardComponent,
    StPageComponent,
    SupermanComponent,
    RestComponent,
    ContactComponent
  ],
})
export class SharedModule {}
