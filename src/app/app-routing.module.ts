import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
 

const routes: Routes = [
  {
    path: `user-profile/:id`, loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(m => m.UserProfileRoutingModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/singup/singup.module').then(m => m.SingupModule)
  },
  {
    path: `log-in`, loadChildren: () =>
      import('./features/singing/singing-routing.module').then(m => m.SinginRoutingModule)
  },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }