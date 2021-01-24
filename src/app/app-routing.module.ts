import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
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
  {
    path: 'account/create',
    component: CreateAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
