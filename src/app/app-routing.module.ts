import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CanActivateRouteGuard } from './can-activate-route.guard';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FavoriteComponent } from './favorite/favorite.component';
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  //  canActivate: [CanActivateRouteGuard] 
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:'fav',
    component:FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
