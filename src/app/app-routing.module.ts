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

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'design-game', component: DesignGameComponent },
    { path: 'games', component: GamesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'start-game', component: StartGameComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users-reviews', component: UsersReviewsComponent },
    { path: 'games-reviews', component: GamesReviewsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
