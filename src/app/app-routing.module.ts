import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { DesignGameComponent } from './design-game/design-game.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { StartGameComponent } from './start-game/start-game.component';
import { UsersComponent } from './users/users.component';
import { GamesReviewsComponent } from './admin/games-reviews/games-reviews.component';
import { UsersReviewsComponent } from './admin/users-reviews/users-reviews.component';
import { GamesDetailComponent } from './profile/games-detail/games-detail.component';
import { DesignedGamesDetailComponent } from './profile/designed-games-detail/designed-games-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


// Guards
import { CanActivateProfileGuard } from './auth/can-activate-profile.guard';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'design-game', component: DesignGameComponent },
    { path: 'games', component: GamesComponent },
    { path: 'profile', component: ProfileComponent,
      canActivate: [
      CanActivateProfileGuard]},
    { path: 'start-game', component: StartGameComponent },
    { path: 'users', component: UsersComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },    
    { path: 'users-reviews', component: UsersReviewsComponent },
    { path: 'games-reviews', component: GamesReviewsComponent },
    { path: 'games-detail/:id', component: GamesDetailComponent },
    { path: 'designed-games-detail/:id', component: DesignedGamesDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
