import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { StartGameComponent } from './start-game/start-game.component';
import { DesignGameComponent } from './design-game/design-game.component';
import { GamesComponent } from './games/games.component';
import { UsersReviewsComponent } from './admin/users-reviews/users-reviews.component';
import { GamesReviewsComponent } from './admin/games-reviews/games-reviews.component';

// Services
import { OnlineUsersService } from './_services/online-users.service';
import { BestGamesService } from './_services/best-games.service';
import { BestNewGamesService } from './_services/best-new-games.service';
import { MostOnlineGamesService } from './_services/most-online-games.service';
import { GamesCommentsService } from './_services/games-comments.service';
import { UsersCommentsService } from './_services/users-comments.service';
import { ProfileSummeryService } from './_services/profile-summery.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    StartGameComponent,
    DesignGameComponent,
    GamesComponent,
    UsersReviewsComponent,
    GamesReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    OnlineUsersService,
    BestGamesService,
    BestNewGamesService,
    MostOnlineGamesService,
    GamesCommentsService,
    UsersCommentsService,
    ProfileSummeryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
