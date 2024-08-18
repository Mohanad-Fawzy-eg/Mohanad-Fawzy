import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'home', component: AboutComponent },
  { path: '**', component: AboutComponent },
];

const routOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
