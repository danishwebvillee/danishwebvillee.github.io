import { HomeComponent } from './components/home/home.component';
import { UpdateTimingComponent } from './components/update-timing/update-timing.component';
import { SuperGuard } from './shared/super.guard';
import { UsersComponent } from './components/users/users.component';
import { UserNotesComponent } from './components/user-notes/user-notes.component';
import { AuthGuard } from './shared/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-notes',
    component: UserNotesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-timing',
    component: UpdateTimingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [SuperGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
