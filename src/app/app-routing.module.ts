import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
