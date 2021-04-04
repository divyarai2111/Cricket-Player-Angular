import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CanActivateRouteGuard } from './can-activate-route.guard';
import { DashboardComponent } from './dashboard/dashboard.component'
import { FavoritePlayersComponent } from './favorite-players/favorite-players.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { FavServiceService } from './Services/fav-service.service';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'upcomingMatches', component: UpcomingMatchesComponent},
  { path: 'fav', component: FavoritePlayersComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
    
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
