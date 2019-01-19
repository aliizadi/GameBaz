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
import { GamesDetailComponent } from './profile/games-detail/games-detail.component';
import { DesignedGamesDetailComponent } from './profile/designed-games-detail/designed-games-detail.component';

// Services
import { OnlineUsersService } from './_services/online-users.service';
import { BestGamesService } from './_services/best-games.service';
import { BestNewGamesService } from './_services/best-new-games.service';
import { MostOnlineGamesService } from './_services/most-online-games.service';
import { GamesCommentsService } from './_services/games-comments.service';
import { UsersCommentsService } from './_services/users-comments.service';
import { ProfileSummeryService } from './_services/profile-summery.service';
import { DesignedGamesService } from './_services/profile/designed-games.service';
import { PlayedGamesService } from './_services/profile/played-games.service';
import { UserInformationService } from './_services/profile/user-information.service';

// Modules
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { AccordionModule} from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


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
    GamesReviewsComponent,
    GamesDetailComponent,
    DesignedGamesDetailComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    OnlineUsersService,
    BestGamesService,
    BestNewGamesService,
    MostOnlineGamesService,
    GamesCommentsService,
    UsersCommentsService,
    ProfileSummeryService,
    DesignedGamesService,
    PlayedGamesService,
    UserInformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
